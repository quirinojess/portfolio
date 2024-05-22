import styled, { keyframes } from "styled-components";


export const Main = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
 text-align: center;
 flex-wrap: wrap;
`;

const fade = keyframes`
0% {
  opacity:0;
  transform:  translate(0px,-15px)  ;
}
70% {
  opacity:0.5;
}

100% {
  opacity:1;
  transform:  translate(0px,0px)  ;
}
`;

export const Cards = styled.div`
 width: 200px;
 margin: 0 4vw 0 4vw;
 animation: ${fade} ease 3s;
 animation-iteration-count: 1;
 transform-origin: 50% 50%;
 animation-fill-mode: forwards;
 min-height: 200px;
 @media (max-width: 768px) {
  margin-left: 10vw;
 }
`;

export const Title = styled.div`
 background: white;
 margin-top: 20px;
 font-weight: 600;
 color: black;
 font-size: 20px;
 padding: 10px 0 10px 0;
`;

export const Description = styled.div`
background:white;
padding: 10px 10px 20px 10px;
font-weight:400;
color:black;
height:auto
font-size:16px;
`;

export const Tecnology = styled.div`
 padding: 10px 0 10px 0;
 width: 100%;
 background: #dbfe73;
 color: black;
 font-weight: 600;
`;

export const See = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 10px 0 10px 0;
 width: 157px;
 height: auto;
 background: #000000;
 color: white;
 font-weight: 400;
 transform: rotate(-90deg);
 margin-left: -50%;
 margin-top: -98px;
 a {
  color: white;
  text-decoration:none;
 }
`;
