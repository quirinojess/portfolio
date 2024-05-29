import styled from "styled-components";

export const Main = styled.div`
 width: 100%;
 height: 100vh;
 background-color: #000000;
 text-align: center;
 box-shadow: 5px -2px 7px -4px rgba(0, 0, 0, 0.79);
`;

export const Navbar = styled.div`
 display: flex;
 height: 75vh;
 flex-direction: column;
 flex-wrap: wrap;
 justify-content: flex-end;
 align-items: center;
`;

export const NavItem = styled.div`
 width: 80%;
 border-top: 1px solid #111111;
 padding-top: 10px;
 margin-bottom: 20px;
 svg {
  width: 30%;
  opacity: 0.4;
  transition: 2s ease-in-out;
 }
 svg:hover {
  opacity: 1;
 }
`;
