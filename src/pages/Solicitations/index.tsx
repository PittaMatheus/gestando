import React, { useMemo, useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

import Axios from 'axios'

import {
  MdKeyboardBackspace
} from 'react-icons/md';


import { Container, Content, MenuTeste } from './styles';
import ContentHeader from '../../components/contentHeader';
import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../utils/config/ajaxPaths";
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

import IdataCard from '../../Interfaces/Interfaces'
import Button from '../../components/Button';
import { Filters } from '../Cards/styles';

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
  const [modal, setModal] = useState<boolean>();
  const [dataInfo, setDataInfo] = useState<IdataCard>();
  const [dataOriginal, setDataOriginal] = useState<IdataCard[]>();
  const [selectedStatus, setSelectedStatus] = useState<string[]>(['requested']);
  const { addToast } = useToasts();

  useEffect(() => {
    getCards()
  }, [selectedStatus]);

  async function getCards() {
    try {
      const res = await Axios.get(ajaxUrl.cards.get)
      // Filtro para exibir somente cartões com status - requested
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

  const backToList = () => {
    setModal(false)
  }

  const showDetailItem = (id: number, action: string) => {
    setModal(true);
    if (data) {
      let dataSelected
      data.forEach((item: IdataCard) => {
        if (item.id === id) {
          dataSelected = item;
        }
      })
      setDataInfo(dataSelected);
    }
  }


  async function handleCardRequest(action: string) {
    try {
      if (dataInfo) {
        let actionMsg = action == "approved" ? "aprovado" : "recusado"
        dataInfo.status = action
        const res = await Axios.put(ajaxUrl.cards.manage + "/" + dataInfo.id, dataInfo)
        addToast("Cartão " + actionMsg + " com sucesso!", { appearance: 'success' });
        getCards()
        setModal(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

return (
  <Container>
    <ContentHeader title={"Solicitações"} lineColor={"#F7943B"} >
    </ContentHeader>
    <Content>
      <MenuTeste>
        {modal &&
          <>
            <Button className="button-back" onClick={backToList}><MdKeyboardBackspace /></Button>
            <section className="page-contain">
              <a href="#" className="data-card">
                {dataInfo &&
                  <>
                    <h3> {dataInfo.metadatas.name}</h3>
                    <h4> {dataInfo.createdAt}</h4>
                    <p>Limit {formatCurrency(dataInfo.metadatas.limit)}</p>
                    <p>{dataInfo.metadatas.limit}</p>
                    <div>
                      <Button onClick={() => handleCardRequest("approved")} className="action-button-approve">Aprovar</Button>
                      <Button onClick={() => handleCardRequest("refused")} className="action-button-reject">Rejeitar</Button>
                    </div>
                  </>
                }
              </a>
            </section>
          </>
        }
      </MenuTeste>
      {data && !modal && data.map(item => (
        <HistoryCard
          callBackClick={showDetailItem}
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