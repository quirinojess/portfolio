import styled from "styled-components";

export const Social = styled.div`
 position: fixed;
 bottom: 0;
 left: 0;
 display: flex;
 flex-direction: column;
 padding-bottom: ${props => props.theme.spacing.extraLarge};
 &:after {
  content: "";
  display: block;
  height: ${props => props.theme.proportions.half};
  width: 1px;
  background: ${props => props.theme.colors.primary};
  position: absolute;
  bottom: 0;
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
`;
