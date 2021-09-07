import React from 'react';

import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';



import { Container } from './style';

const options = [
  { value: "Matheus", label: "Matheus" },
  { value: "Luciana", label: "Luciana" }
]

const Home: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Home" lineColor="#FFF" >
      <SelectInput options ={options} />
      </ContentHeader>
    </Container>
  );
}

export default Home;
