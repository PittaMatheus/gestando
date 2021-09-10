import React, { ButtonHTMLAttributes } from "react";

import { Container } from './styles';

// Interface recebe elementos de um input
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children,  ...rest }) => {

  return (
    <Container {...rest }>
      {children}
    </Container>
  );
}

export default Button;
