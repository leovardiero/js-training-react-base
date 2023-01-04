import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        {' '}
        Página de Login
        <small> Minitexto</small>
      </Title>
      <Paragrafo> Lorem ipsum dolor sit amed.</Paragrafo>
      <button type="button"> Enviar </button>
    </Container>
  );
}
