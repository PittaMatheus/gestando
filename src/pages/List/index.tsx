import React from 'react';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryCard from '../../components/HistoryCard';



const List: React.FC = () => {

  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" }
  ];



  const years = [
    { value: 2020, label: "2020" },
    { value: 2019, label: "2019" },
    { value: 2018, label: "2018" },
  ];

  return (
    <Container>
      <ContentHeader title="Lista" lineColor="#E44C4E" >
        <SelectInput options={months} />
        <SelectInput options={years} />

      </ContentHeader>

      <Filters>
        <button 
            type="button"
            className="tag-filter tag-filter-approved"
            >
          Aprovados
        </button>

        <button 
            type="button"
            className="tag-filter tag-filter-refused"
            >
          Recusados
        </button>
      </Filters>


      <Content>
        <HistoryCard
          tagColor="#E44C4E"
          title="Titulo 1"
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />

        <HistoryCard
          tagColor="#E44C4E"
          title="Titulo 2"
          amount="R$ 100,00"
          subtitle="07/09/2021"

        />

        <HistoryCard
          tagColor="#E44C4E"
          title="Titulo 3"
          amount="R$ 100,00"
          subtitle="07/09/2021"

        />

        <HistoryCard
          tagColor="#E44C4E"
          title="Titulo 4 "
          amount="R$ 100,00"
          subtitle="07/09/2021"

        />

        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
          tagColor="#E44C4E"
          title="João Pedro "
          amount="R$ 100,00"
          subtitle="07/09/2021"
        />
        <HistoryCard
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