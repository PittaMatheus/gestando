import React from "react";

import {
  MdPersonPin,
  MdDescription,
  MdPayment,
  MdFindInPage,
  MdExitToApp
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg'

import { 
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink
 } from './styles'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo do app" />
        <Title>Meu app</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/users">
          <MdPersonPin />
          Usuários
        </MenuItemLink>
        <MenuItemLink href="/list/cards">
          <MdPayment />
          Cartões
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdFindInPage />
          Auditoria
        </MenuItemLink>
        <MenuItemLink href="/solicitations">
          <MdDescription />
          Pedidos
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>

  );
}

export default Aside;
