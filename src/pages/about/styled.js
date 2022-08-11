import styled from "styled-components";

export const Align = styled.div`
 width: 100%;
 display: flex;
 height: 100vh;
`;

export const Alignleft = styled.div`
 width: 8%;
 @media (max-width: 768px) {
  width: 17%;
 }
`;

export const Alignright = styled.div`
 width: 82%;
 flex-grow: 1;
 overflow-y: scroll;
 padding: 50px 5% 0 5%;
 @media (max-width: 768px) {
  width: 73%;
 }
`;

export const H1 = styled.h1`
 font-size: 4em;
 font-weight: 700;
 margin: 0;
 padding: 0;
`;

export const Text = styled.div`
 width: 90%;
 padding: 5vh 0 5vh 0;
 font-size: 16px;
 line-height: 32px;
`;

export const Linkcv = styled.div`
 display: flex;
 align-items: center;
 margin: 5vh 0 0 0;
 a {
  border-bottom: 2px solid #fd2c67;
  text-decoration: none;
  margin-left: 10px;
  color: black;
 }
`;
