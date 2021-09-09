import React from 'react';

import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';



import { Container } from './style';

const options = [
  { value: "Matheus", label: "Matheus" },
  { value: "Matheus 01", label: "Matheus 01" }
]

const Home: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Home" lineColor="#FFF" >
      <SelectInput options ={options} onChange={()=>{}}/>
      </ContentHeader>
    </Container>
  );
}

export default Home;
