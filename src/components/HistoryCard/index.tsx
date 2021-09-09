import React from "react";

import { Container, Tag } from './styles'

interface IHistoryCardProps {
  id: number;
  tagColor: string;
  title: string;
  subtitle: Date;
  amount: string;

}

const HistoryFinanceCard: React.FC<IHistoryCardProps> = ({ 
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
