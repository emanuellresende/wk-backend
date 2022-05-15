import React, { useState } from 'react'
import { Input, Form, Container, ContentItem, Wrapper, InputSubmit } from './styles'
import logo from '../../images/logo.jpg';
import axios from 'axios'
export default function HomeScreen() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  function validateName() {
    let nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    if (!(nomeSobrenome.test(username))) {
      return false;
    } else {
      return true;
    }

  }
  async function onHandleSubmit(e) {


    e.preventDefault();
    if (validateName() === false) {
      alert("Nome invalido, favor digitar o sobrenome");
    }
    else {
      const data = await axios.put('https://wk-backend.herokuapp.com/api/register', { name: username, email });
      if (data.data.status === 400) {
        alert("Erro na criação de Usuário");
      }
      else {
        alert("Seu Token de acesso unico é: https://wk-frontend.herokuapp.com/users/" + email + '/' + data.data.data.accessToken);
      }
    }


  }
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt='' />
        <ContentItem>
          <Form onSubmit={onHandleSubmit}>
            <label>Nome</label>
            <Input id='username' onChange={(e) => {
              setUsername(e.target.value)
            }} value={username} />
            <label>Email</label>
            <Input id='email' value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <InputSubmit />
          </Form>
        </ContentItem>
      </Container>
    </Wrapper>
  )
}
