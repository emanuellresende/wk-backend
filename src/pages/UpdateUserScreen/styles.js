import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
background-color: #3C2B57;
`;

export const Container = styled.div`
display: flex;
width: 50vw;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const ContentItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ContentForm = styled.div`

`
export const Form = styled.form`
display: flex;
width: 25vw;
height: 50vh;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
`
export const Input = styled.input`
border: none;
background-color: #DCDCDC	;
height: 2rem;
color: black;
width: 75%;
margin-bottom: 1.5rem;
`

export const InputSubmit = styled.input.attrs({ 
    type: 'submit',
   
  })`
border: none;
background-color: #3C2B57	;

color: white;
width: 75%;
height: 2rem;
margin-bottom: 1.5rem;
    &:active {
      background-color: #E74C48;
    }
  `