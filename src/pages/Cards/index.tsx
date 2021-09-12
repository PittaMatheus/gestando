import React, { useMemo, useState, useEffect } from 'react';

import Axios from 'axios'

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/contentHeader';
import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../utils/config/ajaxPaths";
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

import IdataCard from '../../Interfaces/Interfaces'

import SelectInput from '../../components/SelectInput';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}



interface ITagColor {
  status: string,
  color: string
}

const Cards: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<IdataCard[]>();
  const [dataOriginal, setDataOriginal] = useState<IdataCard[]>();
  const [selectedStatus, setSelectedStatus] = useState<string[]>(['approved', 'refused']);

  useEffect(() => {
    getCards()
  }, [ selectedStatus]);

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
      const filteredStatus = res.data.filter((item: any) => {
        return selectedStatus.includes(item.status);
      });

      const formattedData = filteredStatus.map((item: any) => {
        let color = processColor(item.status);
        return {
          id: item.id,
          createdAt: formatDate(item.createdAt),
          updatedAt: item.updatedAt,
          status: item.status,
          metadatas: item.metadatas,
          tagColor: color
        }
      })

      setData(formattedData)
      setDataOriginal(formattedData)

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


  const handleFilter = (status: string) => {
    const alreadySelected = selectedStatus.findIndex(item => item === status);
    if (alreadySelected >= 0) {
      // desmarca o filtro
      const filtered = selectedStatus.filter(item => item !== status);
      setSelectedStatus(filtered)
    } else {
      // Mantem os filtros existentes, e adiciona o novo 
      setSelectedStatus((prev) => [...prev, status])
    }

  }

  return (
    <Container>
      <ContentHeader title={params.title} lineColor={params.lineColor} >
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-approved
          ${selectedStatus.includes('approved') && 'tag-actived'}
          `}
          onClick={() => handleFilter('approved')}
        >
          Aprovados
        </button>

        <button
          type="button"
          className={`tag-filter tag-filter-refused
          ${selectedStatus.includes('refused') && 'tag-actived'}
          `}
          onClick={() => handleFilter('refused')}
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
            amount={formatCurrency(item.metadatas.limit)}
            subtitle={item.createdAt}
          />
        ))
        }
      </Content>
    </Container>
  )
}

export default Cards;