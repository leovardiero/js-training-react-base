import React from 'react';
import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/aluno');
      console.log(response);
    }

    getData();
  }, []);

  return (
    <Container>
      <Title>
        Página de Login
        <small> Minitexto</small>
      </Title>
      <Paragrafo> Lorem ipsum dolor sit amed.</Paragrafo>
      <button type="button"> Enviar </button>
    </Container>
  );
}
