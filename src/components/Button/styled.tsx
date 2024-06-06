import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
  0% { border-color: var(--border-color-primary); }
  50% { border-color: var(--border-color-secondary); }
`;

export const Button = styled.button`
 --border-color-primary: ${props => props.theme.colors.secondary};
 --border-color-secondary: ${props => props.theme.colors.primary};
 background: none;
 border: none;
 cursor: pointer;
 font-size: ${props => props.theme.typography.medium};
 padding: ${props => props.theme.spacing.medium};
 color: ${props => props.theme.colors.white};
 border: 1px solid;
 border-color: ${props => props.theme.colors.secondary};
 margin: 0 ${props => props.theme.spacing.small};
 outline: 0;
 position: relative;
 user-select: none;
 touch-action: manipulation;

 &:hover {
  animation: ${colorChange} ${props => props.theme.transitions.medium} linear
   infinite;
 }
`;
