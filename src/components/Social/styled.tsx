import styled, { css } from "styled-components";
import { ColumnCenter } from "themes/CommonAligns";

export const Social = styled(ColumnCenter("div"))`
 position: fixed;
 bottom: 0;
 left: 0;
 padding-bottom: ${props => props.theme.spacing.extraLarge};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   padding-bottom: ${props => props.theme.spacing.extraLarge};
   justify-content: flex-end;
  }
 `}
 &:after {
  content: "";
  display: block;
  height: ${props => props.theme.proportions.half};
  width: 1px;
  background: ${props => props.theme.colors.primary};
  position: absolute;
  bottom: 0px;
  left: ${props => props.theme.proportions.half};
  transform: translateX(calc(${props => props.theme.proportions.half} - 2px));
 }
`;

export const SocialItem = styled.a`
 padding: ${props => props.theme.spacing.medium};
 svg{    
 transition: ${props => props.theme.transitions.short};
 &:hover{
fill: ${props => props.theme.colors.secondary} !important;
transform: scale(1.2);
}
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   padding: 0;
   transform: scale(0.8);
  }
 `}

`;
