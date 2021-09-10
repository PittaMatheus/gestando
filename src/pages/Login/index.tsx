import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth';

import { Container, Logo, Form, FormTitle } from './style';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo" />
        <h2>Meu app</h2>
      </Logo>
      <Form onSubmit={() => { signIn(email, Password) }}>
        <FormTitle>Entrar</FormTitle>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required />
        <Button type="submit">
          Acessar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
