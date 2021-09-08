import React from "react";

import { Container, Tag } from './styles'

interface IHistoryFinanceCardProps {
  id: number;
  tagColor: string;
  title: string;
  subtitle: Date;
  amount: number;

}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({ 
  tagColor, title, subtitle, amount
 }) => {
  return (
    <Container>
      <Tag color={tagColor}/>
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
        <h3>{amount}</h3>
    </Container>

  );
}

export default HistoryFinanceCard;
