import React, { useState, useEffect } from 'react';

import Axios from 'axios'

import { Container, Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import HistoryCard from '../../components/HistoryCard';
import FindInput from '../../components/FindInput';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { ajaxUrl } from "../../utils/config/ajaxPaths";


interface IdataUser {
  name: string,
  email: string,
  BirthDate: Date,
  createdAt: Date,
  updatedAt: Date | null,
  enabledFeatures: Array<Number>,
  document: number,
  tagColor: string,
  metadatas: {
    validDocument: Boolean,
    verified: Boolean
  },
  address: {
    string: number,
    streetNumber: number,
    city: string,
    state: string,
    neighborhood: string,
    postalCode: number,
  },
  salaryBase: string,
  id: number,
}

const Users: React.FC = () => {

  const [data, setData] = useState<IdataUser[]>();
  const [dataOriginal, setDataOriginal] = useState<IdataUser[]>();

  useEffect(() => {
    getUsers()
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

  async function getUsers() {
    try {
      const res = await Axios.get(ajaxUrl.users.get)
      const response = res.data.map((item: any) => {
        let color = processColor(item.status);
        return {
          id: item.id,
          name: item.name,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          metadatas: item.metadatas,
          tagColor: color,
          address: item.address,
          salaryBase: formatCurrency(Number(item.salaryBase))
        }
      })
      setDataOriginal(response)
      setData(response)
    } catch (error) {
      console.log(error)
    }

  }

  const findUsers = (event: any) => {
    let filtro = event.target.value
    let newUsers : Array<IdataUser> = []
    if (dataOriginal) {
      dataOriginal.forEach(user => {
        if(user.name){
          if(user.name.indexOf(filtro) > -1){
            newUsers.push(user)
          }
        }
      })
      if(filtro === ''){
        newUsers = dataOriginal
      }
      setData(newUsers)
    }
  }

  return (
    <Container>
      <ContentHeader title={"Usuários"} lineColor={"#F7943B"} >
        <FindInput onChange={findUsers} placeholder="Pesquisar"></FindInput>
      </ContentHeader>
      <Content>

        {data && data.map(item => (
          <HistoryCard
            key={item.id}
            id={item.id}
            tagColor={item.tagColor}
            title={item.name}
            amount={item.salaryBase}
            subtitle={formatDate(item.createdAt)}
          />
        ))
        }
      </Content>
    </Container>
  )
}

export default Users;