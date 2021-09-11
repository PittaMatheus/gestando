import React, { useMemo, useState, useEffect } from 'react';

import Axios from 'axios'

import { Container, Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../utils/config/ajaxPaths";
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

import IdataCard from '../../Interfaces/Interfaces'

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

const Solicitations: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<IdataCard[]>();
  const [dataOriginal, setDataOriginal] = useState<IdataCard[]>();
  const [selectedStatus, setSelectedStatus] = useState<string[]>(['requested', 'approved', 'refused']);

  useEffect(() => {
    getCards()
  }, [selectedStatus]);

  async function getCards() {
    try {
      const res = await Axios.get(ajaxUrl.cards.get)
      const filteredStatus = res.data.filter((item: any) => {
        return selectedStatus.includes(item.status);
      });

      const formattedData = filteredStatus.map((item: any) => {
        return {
          id: item.id,
          createdAt: formatDate(item.createdAt),
          updatedAt: item.updatedAt,
          status: item.status,
          metadatas: item.metadatas,
          tagColor: "#F7943B"
        }
      })

      setData(formattedData)
      setDataOriginal(formattedData)

    } catch (error) {
      console.log(error)
    }
  }

  const teste = () =>{
    console.log("gerenciar pedido")
  }
  return (
    <Container>
      <ContentHeader title={"Solicitações"} lineColor={"#F7943B"} >
      </ContentHeader>

      <Content>

        {data && data.map(item => (
          <HistoryCard
            onClick={teste}
            buttonAction={true}
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

export default Solicitations;