import styled, { css } from "styled-components";

export const Navbar = styled.div`
 position: absolute;
 top: 310px;
 right: 15%;
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.tablet}) {
   top: 80vw;
   right: auto;
  }
 `}
`;

export const NavItem = styled.button`
 background: none;
 cursor: pointer;
 border: 1px solid ${props => props.theme.colors.primary};
 padding: 0 ${props => props.theme.spacing.small};
 color: ${props => props.theme.colors.secondary};
 font-size: ${props => props.theme.typography.small};
 font-weight: 700;
 line-height: ${props => props.theme.spacing.small};
 margin: 0 ${props => props.theme.spacing.small};
 padding: ${props => props.theme.spacing.small};
 transition: ${props => props.theme.transitions.short};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   font-size: ${props => props.theme.typography.small};
   padding: ${props => props.theme.spacing.verySmall};
  }
 `}
 &:hover {
 border: 1px solid ${props => props.theme.colors.secondary};
 color: ${props => props.theme.colors.white};
`;
