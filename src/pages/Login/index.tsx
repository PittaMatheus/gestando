import React, { useState, FormEvent } from 'react';

import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import validator from 'validator';

import { useAuth } from '../../hooks/auth';

import { Container, Logo, Form, FormTitle } from './style';
import { useToasts } from 'react-toast-notifications';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const { addToast } = useToasts();
  const { signIn } = useAuth();


  const validateFields = (e: FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      signIn(email, Password);
    } else {
      addToast("Email inválido!", { appearance: 'error' });
    }

  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="logo" />
        <h2>Meu app</h2>
      </Logo>
      <Form onSubmit={(e) => { validateFields(e, email) }}>
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
