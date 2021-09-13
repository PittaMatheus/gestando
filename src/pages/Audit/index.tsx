import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import { Container, Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../utils/config/ajaxPaths";
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';
import IdataAudit from '../../Interfaces/Interfaces';


interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

const Audit: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<IdataAudit[]>();
  const [dataOriginal, setDataOriginal] = useState<IdataAudit[]>();
  const [selectedStatus, setSelectedStatus] = useState<string[]>(['approved', 'refused']);

  useEffect(() => {
    getAudit()
  }, [selectedStatus]);


  async function getAudit() {
    try {
      const res = await Axios.get(ajaxUrl.audits.get)
      if (res.data) {
        setData(res.data)
        setDataOriginal(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ContentHeader title={"Auditoria"} lineColor={"#E44C4E"} >
      </ContentHeader>
      <Content>
        {data && data.map(item => (
          <HistoryCard
            key={item.id}
            id={item.id}
            tagColor={item.tagColor}
            title={item.before.name}
            amount={formatCurrency(item.before.digits)}
            subtitle={formatDate(item.after.updatedAt)}
            actionBefore={item.before.status}
            actionAfter={item.after.status}

          />
        ))
        }
      </Content>
    </Container>
  )
}

export default Audit;