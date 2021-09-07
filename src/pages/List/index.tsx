import React from 'react';

import { Container, Content } from './styles';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';



const List: React.FC = () => {

  const options = [
    { value: "Matheus", label: "Matheus" },
    { value: "Matheus 01", label: "Matheus 01" }
  ];

  return (
    <Container>
      <ContentHeader title="Lista" lineColor="#E44C4E" >
        <SelectInput options={options} />
      </ContentHeader>


      <Content>
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Titulo 1"
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />

        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Titulo 2"
          amount="R$ 100,00"
          subtitle="07/09/2021"

        />

        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Titulo 3"
          amount="R$ 100,00"
          subtitle="07/09/2021"

        />

        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Titulo 4 "
          amount="R$ 100,00"
          subtitle="07/09/2021"

        />

        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
      </Content>
    </Container>
  )
}

export default List;