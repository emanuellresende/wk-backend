import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Button, ContainerButton } from './styles'
import logo from '../../images/logo.jpg';
import axios from 'axios'

import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const { email, token } = useParams();
  const [newToken, setNewToken] = useState('');
  const [accept, setAccept] = useState(0);
  const location = useLocation();
  let navigate = useNavigate();
  function newRote(props) {

    navigate(`/users/${email}/${newToken}/${props}`, {
      state: {
        email: email,
        accessToken: newToken,
      }
    });


  }

  useEffect(() => {
    onHandleSubmit();
  }, [location]);
  async function onHandleSubmit() {


    const data = await axios.post('https://wk-frontend.herokuapp.com/api/login', { accessToken: token, email });
    if (data.data.status === 400) {
      alert("Token de Acesso Invalido \nAcesso ao sistema negado");
    }
    else {
      setNewToken(data.data.data.newAccessToken);
      setAccept(1);
      alert("Seu Token de acesso unico é: https://wk-frontend.herokuapp.com/users/" + email + '/' + data.data.data.newAccessToken);
    }

  }

  if (accept === 1) {
    return (
      <Wrapper>
        <Container>
          <img src={logo} alt='' />
          <ContainerButton>
            <Button onClick={() => {
              navigate('/');
            }}>
              <span>Cadastrar</span>
            </Button>
            <Button onClick={() => {
              newRote('update')
            }}>
              <span>Editar</span>
            </Button>

            <Button onClick={() => {
              newRote('delete')
            }} >
              <span>Excluir</span>
            </Button>

          </ContainerButton>
        </Container>

      </Wrapper>
    )
  }
  else {
    return (
      <Wrapper>
        <Container>
          <img alt='' src={logo} />
        </Container>
      </Wrapper>
    );
  }
}
