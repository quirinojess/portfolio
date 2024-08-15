import styled, { keyframes, css } from "styled-components";
import { IButtonVariant } from "types/Button";

const colorChange = keyframes`
  0% { border-color: var(--border-color-primary); }
  50% { border-color: var(--border-color-secondary); }
`;

export const Button = styled.button<{ variant: IButtonVariant }>`
 --border-color-primary: ${props => props.theme.colors.secondary};
 --border-color-secondary: ${props => props.theme.colors.primary};
 background: none;
 border: none;
 cursor: pointer;
 font-size: ${props => props.theme.typography.medium};
 padding: ${props => props.theme.spacing.medium};
 color: ${props => props.theme.colors.white};
 ${props =>
  props.variant !== "secondary" &&
  css`
   border: 1px solid;
  `}
 border-color: ${props => props.theme.colors.secondary};
 margin: 0 ${props => props.theme.spacing.small};
 outline: 0;
 position: relative;
 user-select: none;
 touch-action: manipulation;
 transition: ${props => props.theme.transitions.short};
 &:hover {
  ${props =>
   props.variant !== "secondary" &&
   css`
    animation: ${colorChange} ${props.theme.transitions.medium} linear infinite;
   `}
  transform: scale(0.9);
 }
`;
