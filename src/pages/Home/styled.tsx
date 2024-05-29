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
 background: #333333;
 @media (max-width: 768px) {
  width: 73%;
 }
`;
