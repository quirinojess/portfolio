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
 background: #333333;
 flex-grow: 1;
 overflow-y: scroll;
 padding: 50px 5% 0 5%;
 @media (max-width: 768px) {
  width: 73%;
 }
`;

export const H2 = styled.h2`
 font-size: 40px;
 color:white;
 padding:15px;
 text-shadow: 4px 2px 5px rgba(0, 0, 0, 0.86);
`;
