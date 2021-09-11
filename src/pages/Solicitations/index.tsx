import React, { useMemo, useState, useEffect } from 'react';

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
  const [dataInfo, setdataInfo] = useState<IdataCard>();
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

  const teste2 = () => {
    setModal(false)
  }

  const teste = () => {
    setModal(true);
    console.log("gerenciar pedido")
  }
  return (
    <Container>
      <ContentHeader title={"Solicitações"} lineColor={"#F7943B"} >
      </ContentHeader>

      <Content>
        <MenuTeste>
          {modal &&
            <>
              <Button onClick={teste2}><MdKeyboardBackspace /></Button>
              <section className="page-contain">
                <a href="#" className="data-card">
                  <h3>270</h3>
                  <h4>Care Facilities</h4>
                  <p>Aenean lacinia bibendum nulla sed consectetur.</p>
                  <span className="link-text">
                    View All Providers
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD" />
                    </svg>
                  </span>
                </a>
              </section>
            </>
          }
        </MenuTeste>
        {data && !modal && data.map(item => (
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