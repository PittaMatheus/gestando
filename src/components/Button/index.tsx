import React, { ButtonHTMLAttributes } from "react";

import { Container } from './styles';

// Interface recebe elementos de um input
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isTest ? : boolean
};

function Button ({ isTest,  ...props }: IButtonProps) {

  return (
    <Container {...props }>
    </Container>
  );
}

export default Button;
