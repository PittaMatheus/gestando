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
import { Link } from 'react-router-dom';

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
        <MenuItemLink>
          <MdPersonPin />
          <Link className="class-link" to="/users">Usuarios</Link>
        </MenuItemLink>
        <MenuItemLink>
          <MdPayment />
          <Link className="class-link" to="/cards">Cartões</Link>
        </MenuItemLink>
        <MenuItemLink >
          <MdFindInPage />
          <Link className="class-link" to="/audit">Auditoria</Link>
        </MenuItemLink>
        <MenuItemLink href="/solicitations">
          <MdDescription />
          <Link className="class-link" to="/solicitations">Pedidos</Link>
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
