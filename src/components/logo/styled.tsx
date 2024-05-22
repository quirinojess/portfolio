import styled from 'styled-components';
import { keyframes} from "styled-components"


const bounce = keyframes`
0% {
  opacity:0;
  transform:  translate(-1500px,0px)  ;
}
60% {
  opacity:1;
  transform:  translate(30px,0px)  ;
}
80% {
  transform:  translate(-10px,0px)  ;
}
100% {
  opacity:1;
  transform:  translate(0px,0px)  ;
}
`;



export const Main = styled.div`
width:100%;
padding-top:10vh;
height:auto;
   display:flex;
   flex-direction: column;
   align-items: flex-start;
  flex-wrap:wrap;
  animation: ${bounce} ease 1.5s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode:forwards;

  @media (max-width: 768px) {
    padding-top:5vh;
  }
`;



export const H1 = styled.h1`

color:white;
font-size:8em;
font-weight:700;
text-shadow: 4px 2px 5px rgba(0, 0, 0, 0.86);
margin:0;
padding:0;
@media (max-width: 768px) {
  font-size:6em;
}

`;

export const H2 = styled.h2`

 color:#fd2c67;
 font-size:4.0em;
 font-weight:400;
   letter-spacing:2px;
   margin-top:-10px;
padding:0;

@media (max-width: 768px) {
  font-size:2.0em;
}

   
`;