import React from 'react';

import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'


import { Container, Logo, Form, FormTitle } from './style';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo" />
        <h2>Meu app</h2>
      </Logo>
      <Form onSubmit={() => { }}>
        <FormTitle>Entrar</FormTitle>
        <Input
          placeholder="Email"
          type="email"
          required />
        <Input
          placeholder="Senha"
          type="password"
          required />
        <Button type="submit">
          Acessar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
