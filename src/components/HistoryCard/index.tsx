import React from "react";
import Button from "../Button";


import {
  MdArrowForward
} from 'react-icons/md';

import { Container, Tag } from './styles'

interface IHistoryCardProps {
  id: number;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
  buttonAction?: Boolean;
  callBackClick?: Function;
  actionBefore?: string;
  actionAfter?: string;


}

const HistoryFinanceCard: React.FC<IHistoryCardProps> = ({
  id, tagColor, title, subtitle,
  amount, buttonAction, callBackClick, actionAfter, actionBefore
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
        {actionAfter && <div>{actionBefore} <MdArrowForward /> {actionAfter}</div>}
        {!actionAfter && <div>Created</div>}

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
