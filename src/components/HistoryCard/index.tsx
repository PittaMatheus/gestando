import React from "react";
import Button from "../Button";


import { Container, Tag } from './styles'

interface IHistoryCardProps {
  id: number;
  tagColor: string;
  title: string;
  subtitle: Date;
  amount: string;
  buttonAction?: Boolean;
  callBackClick?: Function;
}

const HistoryFinanceCard: React.FC<IHistoryCardProps> = ({
  id, tagColor, title, subtitle, amount, buttonAction, callBackClick
}) => {

  const onClick = () => {
    if (callBackClick) {
      callBackClick(id);
    }
  }

  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
      {buttonAction &&
        <div><Button onClick={() => onClick()}>Gerenciar</Button></div>
      }
    </Container>

  );
}

export default HistoryFinanceCard;
