import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
  0% { border-color: var(--border-color-primary); }
  50% { border-color: var(--border-color-secondary); }
`;

export const Navbar = styled.nav`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;

export const NavItem = styled.button`
 --border-color-primary: ${props => props.theme.colors.secondary};
 --border-color-secondary: ${props => props.theme.colors.primary};
 background: none;
 border: none;
 cursor: pointer;
 font-size: ${props => props.theme.typography.medium};
 padding: ${props => props.theme.spacing.medium};
 color: ${props => props.theme.colors.white};
 margin: 0 ${props => props.theme.spacing.small};
 outline: 0;
 position: relative;
 user-select: none;
 touch-action: manipulation;

 &:after {
  content: "";
  border: 1px solid;
  border-color: ${props => props.theme.colors.darkDeep};
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
 }

 &:hover:after {
  animation: ${colorChange} ${props => props.theme.transitions.medium} linear
   infinite;
  top: 0px;
  left: 0px;
 }
`;
