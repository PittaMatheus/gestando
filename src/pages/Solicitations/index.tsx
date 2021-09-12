import React, { useMemo, useState, useEffect, FormEvent } from 'react';
import { useToasts } from 'react-toast-notifications';
import validator from 'validator';

import Axios from 'axios'

import {
  MdKeyboardBackspace
} from 'react-icons/md';


import { Container, Content, MenuTeste, Form, FormTitle } from './styles';
import ContentHeader from '../../components/contentHeader';

import HistoryCard from '../../components/HistoryCard';
import { ajaxUrl } from "../../utils/config/ajaxPaths";
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';
import FindInput from '../../components/FindInput';

import IdataCard from '../../Interfaces/IDataCard'
import IdataAudit from '../../Interfaces/Interfaces'

import { Filters } from '../Cards/styles';

import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth';


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
  const [actions, setActions] = useState<Boolean>(true);
  const [modalCreateRequest, setModalCreateRequest] = useState<boolean>();



  const [name, setName] = useState<string>('');
  const [digits, setDigits] = useState<string>('');
  const [limit, setLimit] = useState<string>('');



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
          createdAt: item.createdAt,
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
    setModalCreateRequest(false)
    setActions(true);
  }

  const showDetailItem = (id: number, action: string) => {
    setModal(true);
    setActions(false);

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


  async function handleAudit(data: IdataCard, action: string) {
    let updateDate = new Date().getTime();

    let obj = {
      createdAt: data.createdAt,
      type: "card-status-change",
      before: {
        createdAt: data.createdAt,
        id: data.id,
        metadatas: {
          name: data.metadatas.name,
          digits: data.metadatas.digits
        },
        digits: data.metadatas.digits,
        name: data.metadatas.name,
        status: data.status,
        updatedAt: null,
        user_id: data.id
      },
      after: {
        createdAt: data.createdAt,
        id: data.id,
        metadatas: {
          name: data.metadatas.name,
          digits: data.metadatas.digits
        },
        digits: data.metadatas.digits,
        name: data.metadatas.name,
        status: action,
        updatedAt: updateDate,
        user_id: data.id
      },
      requestedBy: 11112 // Nao entendi esse parametro :(
    }

    const res2 = await Axios.post(ajaxUrl.audits.manage, obj)
  }



  async function handleCardRequest(action: string) {
    try {
      if (dataInfo) {
        const cloneDataInfo = JSON.parse(JSON.stringify(dataInfo));
        let actionMsg = action == "approved" ? "aprovado" : "recusado"
        cloneDataInfo.status = action
        // Gerencia de cartão
        const res = await Axios.put(ajaxUrl.cards.manage + "/" + cloneDataInfo.id, cloneDataInfo)
        // Auditoria
        handleAudit(dataInfo, action)
        addToast("Cartão " + actionMsg + " com sucesso!", { appearance: 'success' });
        getCards()
        setActions(true);
        setModal(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const findUsers = (event: any) => {
    let filtro = event.target.value
    let newUsers: Array<IdataCard> = []
    if (dataOriginal) {
      dataOriginal.forEach(user => {
        if (user.metadatas.name) {
          if (user.metadatas.name.indexOf(filtro) > -1) {
            newUsers.push(user)
          }
        }
      })
      if (filtro === '') {
        newUsers = dataOriginal
      }
      setData(newUsers)
    }
  }
  const createRequest = () => {
    setActions(false);
    setModalCreateRequest(true)
  }

  async function createCardRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let createdDate = new Date().getTime();


    if (!validator.isNumeric(limit) || !validator.isNumeric(digits)) {
      addToast("Campos Inválidos!", { appearance: 'error' });
      return
    }
    let newCard: IdataCard = {
      id: 0,
      createdAt: new Date(createdDate),
      updatedAt: null,
      status: "requested",
      metadatas: {
        name: name,
        digits: Number(digits),
        limit: Number(limit),
      },
      tagColor: "teste"
    }

    try {
      const res = await Axios.post(ajaxUrl.cards.manage, newCard)
      console.log(res)
      let id_card = res.data.id
      addToast("Pedido criado com sucesso!", { appearance: 'success' });
      getCards();
      backToList();
      newCard.id = id_card
      auditCreateCard(newCard)
    } catch (error) {
      addToast("Erro ao criar o pedido!", { appearance: 'error' });
      console.log(error)
    } 

   
  async function auditCreateCard(data: IdataCard) {
    let obj = {
      createdAt: data.createdAt,
      type: "card-status-change",
      before: {
        createdAt: data.createdAt,
        id: data.id,
        metadatas: {
          name: data.metadatas.name,
          digits: data.metadatas.digits
        },
        digits: data.metadatas.digits,
        name: data.metadatas.name,
        status: data.status,
        updatedAt: null,
        user_id: data.id
      },
      after: {
        createdAt: data.createdAt,
        id: data.id,
        metadatas: {
          name: data.metadatas.name,
          digits: data.metadatas.digits
        },
        digits: data.metadatas.digits,
        name: data.metadatas.name,
        status: null,
        updatedAt: null,
        user_id: data.id
      },
      requestedBy: 11112 // Nao entendi esse parametro :(
    }

    const res2 = await Axios.post(ajaxUrl.audits.manage, obj)
  }

  }

  return (
    <Container>
      <ContentHeader title={"Solicitações"} lineColor={"#F7943B"} >
        {actions &&
          <>
            <FindInput onChange={findUsers} placeholder="Pesquisar"></FindInput>
            <Button onClick={createRequest} className="tag-button-action">Criar</Button>
          </>
        }
      </ContentHeader>
      <Content>
        <MenuTeste>
          {modal && !modalCreateRequest &&
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

          {modalCreateRequest &&
            <>
              <Button className="button-back" onClick={backToList}><MdKeyboardBackspace /></Button>
              <section className="page-contain">
                <Form onSubmit={(e) => { createCardRequest(e) }}>
                  <FormTitle>Novo pedido</FormTitle>
                  <Input
                    placeholder="Nome"
                    type="text"
                    onChange={(e) => { setName(e.target.value) }}
                    required />
                  <Input
                    placeholder="Digitos"
                    type="number"
                    onChange={(e) => { setDigits(e.target.value) }}
                    required />
                  <Input
                    placeholder="Limite"
                    type="number"
                    onChange={(e) => { setLimit(e.target.value) }}
                    required />
                  <Button type="submit">
                    Acessar
                  </Button>
                </Form>

                {/* 

                {
                "id": 1001,
                "createdAt": "2017-06-25T19:36:32.711Z",
                "updatedAt": null,
                "status": "approved",
                "metadatas": {
                  "name": "Tiago Rodrigues",
                  "digits": 8862,
                  "limit": 1877
                }, */}



              </section>
            </>
          }

        </MenuTeste>
        {data && !modal && !modalCreateRequest && data.map(item => (
          <HistoryCard
            callBackClick={showDetailItem}
            buttonAction={true}
            key={item.id}
            id={item.id}
            tagColor={item.tagColor}
            title={item.metadatas.name}
            amount={formatCurrency(item.metadatas.limit)}
            subtitle={formatDate(item.createdAt)}
          />
        ))
        }
      </Content>
    </Container>
  )
}

export default Solicitations;