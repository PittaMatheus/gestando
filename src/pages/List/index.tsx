import React, { useMemo, useState, useEffect } from 'react';

import Axios from 'axios'

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../config/ajaxPaths";

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}


interface IdataCard {
  createdAt: Date,
  updatedAt: Date | null,
  status: string,
  id: number,
  tagColor: string,
  metadatas: {
    name: string,
    digits: number,
    limit: number
  }
}

interface ITagColor {
  status: string,
  color: string
}

const List: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<IdataCard[]>();

  useEffect(() => {
    getCards()
  }, []);

  const processColor = (status: string) => {
    let color = {
      requested: '#F7943B',
      refused: "#E44C4E",
      approved: "#03BB85"

    }
    let colorProcessed
    if (status === 'requested')
      colorProcessed = color.requested
    if (status === 'refused')
      colorProcessed = color.refused
    if (status === 'approved')
      colorProcessed = color.approved

    return colorProcessed;

  }

  async function getCards() {
    try {
      const res = await Axios.get(ajaxUrl.cards.get)
      const response = res.data.map((item: any) => {
        let color = processColor(item.status);
        return {
          id: item.id,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          status: item.status,
          metadatas: item.metadatas,
          tagColor: color
        }
      })
      setData(response)
    } catch (error) {
      console.log(error)
    }

  }

  const { type } = match.params;
  const params = useMemo(() => {
    return type === 'cards' ?
      {
        title: 'Cartões',
        lineColor: '#F7943B'
      }
      : {
        title: 'Saídas',
        lineColor: '#E44C4E'
      }

  }, [type]);


  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" }
  ];



  const years = [
    { value: 2020, label: "2020" },
    { value: 2019, label: "2019" },
    { value: 2018, label: "2018" },
  ];

  return (
    <Container>
      <ContentHeader title={params.title} lineColor={params.lineColor} >
        <SelectInput options={months} />
        <SelectInput options={years} />

      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-filter-approved"
        >
          Aprovados
        </button>

        <button
          type="button"
          className="tag-filter tag-filter-refused"
        >
          Recusados
        </button>
      </Filters>


      <Content>

        {data && data.map(item => (
          <HistoryCard
            key={item.id}
            id={item.id}
            tagColor={item.tagColor}
            title={item.metadatas.name}
            amount={item.metadatas.limit}
            subtitle={item.createdAt}
          />
        ))
        }
      </Content>
    </Container>
  )
}

export default List;