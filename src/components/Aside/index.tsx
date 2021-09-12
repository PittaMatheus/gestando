import React from "react";

import {
  MdPersonPin,
  MdDescription,
  MdPayment,
  MdFindInPage,
  MdExitToApp
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton
} from './styles'

const Aside: React.FC = () => {
  const { signOut } = useAuth();
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
        <MenuItemLink href="/cards">
          <MdPayment />
          Cartões
        </MenuItemLink>
        <MenuItemLink href="/audit">
          <MdFindInPage />
          Auditoria
        </MenuItemLink>
        <MenuItemLink href="/solicitations">
          <MdDescription />
          Pedidos
        </MenuItemLink>
        <MenuItemButton onClick={signOut} >
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>

  );
}

export default Aside;
