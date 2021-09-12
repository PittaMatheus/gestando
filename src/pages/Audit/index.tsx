import React, { useMemo, useState, useEffect } from 'react';

import Axios from 'axios';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/contentHeader';
import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../utils/config/ajaxPaths";
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

import IdataAudit from '../../Interfaces/Interfaces';

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

const Audit: React.FC<IRouteParams> = ({ match }) => {

  const [data, setData] = useState<IdataAudit[]>();
  const [dataOriginal, setDataOriginal] = useState<IdataAudit[]>();
  const [selectedStatus, setSelectedStatus] = useState<string[]>(['approved', 'refused']);

  useEffect(() => {
    getAudit()
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

  async function getAudit() {
    try {
      const res = await Axios.get(ajaxUrl.audits.get)
      // const filteredStatus = res.data.filter((item: any) => {
      //   return selectedStatus.includes(item.status);
      // });

      // const formattedData = filteredStatus.map((item: any) => {
      //   let color = processColor(item.status);
      //   return {
      //     id: item.id,
      //     createdAt: formatDate(item.createdAt),
      //     updatedAt: item.updatedAt,
      //     status: item.status,
      //     metadatas: item.metadatas,
      //     tagColor: color
      //   }
      // })

      setData(res.data)
      setDataOriginal(res.data)

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