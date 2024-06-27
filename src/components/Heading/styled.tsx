import styled, { css, keyframes } from "styled-components";

const slideInFromRight = keyframes`
 0% {
    transform: translateX(100%);
    opacity: 0;
  }
  60% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Heading = styled.div`
 line-height: ${props => props.theme.spacing.small};
 animation: ${slideInFromRight} ease 1.5s;
 width: ${props => props.theme.proportions.full};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   margin-top: ${props => props.theme.spacing.medium};
  }
 `}
`;

export const H1 = styled.h1`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.extraLarge};
 line-height: ${props => props.theme.typography.small};
 font-weight: 700;
 margin: 0;
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   font-size: ${props => props.theme.typography.extraLarge};
   line-height: ${props => props.theme.spacing.veryBig};
  }
 `}
`;

export const H2 = styled.h2`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.medium};
 line-height: ${props => props.theme.typography.medium};
 font-weight: 700;
 margin: 0;
`;

export const H3 = styled.h3<{ activeH1: boolean }>`
 color: ${props => props.theme.colors.primary};
 font-size: ${props =>
  props.activeH1
   ? props.theme.typography.veryLarge
   : props.theme.typography.large};
 line-height: ${props => props.theme.typography.medium};
 font-weight: 100;
 margin: 0;
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   font-size: ${props.activeH1
    ? props.theme.typography.h1
    : props.theme.typography.h2};
   line-height: ${props => props.theme.spacing.extraLarge};
  }
 `}
`;
