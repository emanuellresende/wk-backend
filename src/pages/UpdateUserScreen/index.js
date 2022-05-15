import React, { useState, useEffect } from 'react'
import { Input, Form, Container, ContentItem, Wrapper, InputSubmit } from './styles'
import logo from '../../images/logo.jpg';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateUserScreen() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
  const [newToken, setNewToken] = useState('');
  const [accept, setAccept] = useState(0);
  let navigate = useNavigate();
  function validateName() {
    let nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    if (!(nomeSobrenome.test(username))) {
      return false;
    } else {
      return true;
    }

  }
  useEffect(() => {
    loading();
  }, [location]);
  async function loading() {


    const data = await axios.post('https://wk-backend.herokuapp.com/api/login', { accessToken: location.state.accessToken, email: location.state.email });
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
    if (validateName() === false) {
      alert("Nome invalido, favor digitar o sobrenome");
    }
    else {
      const data = await axios.patch('https://wk-backend.herokuapp.com/api/update', { name: username, email: location.state.email });
      if (data.data.status === 400) {
        alert("Erro na atualizacao");
      }
      else {
        alert("Atualizado com sucesso");
        navigate(`/users/${location.state.email}/${newToken}`);
      }
    }

  }
  if (accept === 1) {
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
              <Input id='email' value={location.state.email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
              <InputSubmit />
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
