import styled, { keyframes } from "styled-components";

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
`;

export const H1 = styled.h1`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.extraLarge};
 line-height: ${props => props.theme.typography.small};
 font-weight: 700;
 margin: 0;
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
`;
