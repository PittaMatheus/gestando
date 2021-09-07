import React from 'react';

import { Container } from './styles';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';


const List: React.FC = () => {
  
  const options = [
    { value: "Matheus", label: "Matheus" },
    { value: "Luciana", label: "Luciana" }
  ];

  return (
    <Container>
      <ContentHeader title="Lista" lineColor="#E44C4E" >
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default List;