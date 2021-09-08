import React, { useMemo, useState, useEffect } from 'react';

import Axios from 'axios'

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}


interface Idata {
  createdAt: Date,
  updatedAt: Date | null,
  status: string,
  id: number,
  metadatas: {
    name: string,
    digits: number,
    limit: number
  }
}

const List: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<Idata[]>();

  useEffect(() => {
    getCards()
  }, []);

  const getCards = () => {
    Axios.get("http://localhost:3001/api/cards")
      .then(res => {
        if (res.data) {
          let data = res.data;
          setData(data)
        }

      })
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
            id={item.id}
            tagColor="#E44C4E"
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