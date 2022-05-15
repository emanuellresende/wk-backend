import React, { useState, useEffect } from 'react'
import { Input, Form, Container, ContentItem, Wrapper, InputSubmit } from './styles'
import logo from '../../images/logo.jpg';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

export default function DeleteUserScreen() {

  const location = useLocation();
  const [newToken, setNewToken] = useState('');
  const [accept, setAccept] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    loading();
  }, [location]);
  async function loading() {


    const data = await axios.post('https://wk-frontend.herokuapp.com/api/login', { accessToken: location.state.accessToken, email: location.state.email });
    if (data.data.status === 400) {
      alert("Token de Acesso Invalido \nAcesso ao sistema negado");

    }
    else {
      setNewToken(data.data.data.newAccessToken);

      setAccept(1);

    }

  }
  async function onHandleSubmit(e) {


    e.preventDefault();
    const data = await axios.delete('https://wk-frontend.herokuapp.com/api/remove', { data: { email: location.state.email } });
    if (data.data.status === 400) {
      alert("Erro na Remoçao");

    }
    else {
      alert("Excluido com sucesso");
      navigate('/');

    }


  }
  if (accept === 1) {
    return (
      <Wrapper>
        <Container>
          <img src={logo} alt='' />
          <ContentItem>
            <Form onSubmit={onHandleSubmit}>

              <label>Email</label>
              <Input id='email' value={location.state.email} onChange={(e) => {

              }} />
              <InputSubmit value="Excluir" />
            </Form>
          </ContentItem>
        </Container>
      </Wrapper>
    )
  }
  else {

    return (
      <Wrapper>
        <Container>
          <img src={logo} alt='' />

        </Container>
      </Wrapper>
    );
  }
}
