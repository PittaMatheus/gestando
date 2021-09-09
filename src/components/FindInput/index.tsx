import React, { ChangeEventHandler } from "react";

import {
  Container
} from './styles'


interface IFindInputProps {
  placeholder: string,
  onChange: ChangeEventHandler
}

const FindInput: React.FC<IFindInputProps> = ({ placeholder, onChange }) => {
  return (
    <Container>
      <input placeholder={placeholder} onChange={onChange}  type="text"></input>
    </Container>

  );
}

export default FindInput;
