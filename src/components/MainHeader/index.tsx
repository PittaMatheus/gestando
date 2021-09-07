import React, { useMemo } from "react";

import emojis from '../../utils/emojis';
import Toggle from '../Toggle'

import {
  Container,
  Profile,
  Welcome,
  Username
} from './styles'

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    // Gera um número aleátorio de acordo com a quantidade de emojis
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice]

  }, []);
  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <Username>Matheus Pitta</Username>
      </Profile>
    </Container>

  );
}

export default MainHeader;
