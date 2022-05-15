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

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;

`;
export const Button = styled.button`
	color:white;
	transition: all 0.5s;
	position: relative;
  width: 200px;
  height: 50px;
  margin-top: 10px;
  background-color: #412b57;
  border: none;
  &::before{
    content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background-color: rgba(255,255,255,0.1);
	transition: all 0.3s;

  }
  &:hover::before {
    opacity: 0 ;
	transform: scale(0.5,0.5);
}

&::after {
  content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	transition: all 0.3s;
	border: 1px solid rgba(255,255,255,0.5);
	transform: scale(1.2,1.2);
}

&:hover::after {
	opacity: 1;
	transform: scale(1,1);
  
}

`