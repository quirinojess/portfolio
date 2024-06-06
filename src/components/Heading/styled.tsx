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
 margin: ${props => props.theme.spacing.extraLarge} 0;
 line-height: ${props => props.theme.spacing.small};
 animation: ${slideInFromRight} ease 1.5s;
`;

export const H1 = styled.h1`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.extraLarge};
 font-weight: 700;
`;

export const H2 = styled.h2`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.extraLarge};
 font-weight: 700;
`;

export const H3 = styled.h3`
 color: ${props => props.theme.colors.primary};
 font-size: ${props => props.theme.typography.veryLarge};
 font-weight: 100;
`;
