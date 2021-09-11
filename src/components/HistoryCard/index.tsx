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
  onClick?: React.MouseEventHandler
}

const HistoryFinanceCard: React.FC<IHistoryCardProps> = ({
  tagColor, title, subtitle, amount, buttonAction, onClick
}) => {


  return (
      <Container>
        <Tag color={tagColor} />
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
        {buttonAction &&
          <div><Button onClick={onClick}>Gerenciar</Button></div>
        }
      </Container>

  );
}

export default HistoryFinanceCard;
