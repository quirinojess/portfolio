import styled, { css } from "styled-components";
import {
 TSectionsAlign,
 TSectionsFlex,
 TSectionsJustify,
} from "types/Sections";

export const Sections = styled.section<{
 flex: TSectionsFlex;
 justify: TSectionsJustify;
 align: TSectionsAlign;
 isVisible?: boolean;
}>`
 width: ${props => props.theme.proportions.full};
 display: flex;
 flex-wrap: wrap;
 flex-direction: ${({ flex }) => flex};
 justify-content: ${({ justify }) => justify};
 align-items: ${({ align }) => align};
 gap: ${props => props.theme.spacing.large}
  ${props => props.theme.spacing.medium};
 opacity: ${props => (props.isVisible ? "1" : "0")};
 transition: opacity ${props => props.theme.transitions.short};
 margin-top: ${props => props.theme.spacing.veryBig};
 scroll-margin-top: ${props => props.theme.spacing.extraBig};
 ${props =>
  props.flex === "alternate" &&
  css`
   @media (min-width: ${props.theme.breakpoints.mobile}) {
    > div:nth-child(4n + 3) {
     order: 2;
    }
    > div:nth-child(4n + 4) {
     order: 1;
    }
   }
  `}
 ${props => css`
  @media (min-width: ${props.theme.breakpoints.large}) {
   margin-top: ${props.theme.spacing.extraBig};
   scroll-margin-top: ${props.theme.spacing.extraBig};
  }
  @media (max-width: ${props.theme.breakpoints.desktop}) {
   scroll-margin-top: ${props => props.theme.spacing.big};
  }
  @media (max-width: ${props.theme.breakpoints.tablet}) {
   align-items: flex-start;
   gap: ${props => props.theme.spacing.verySmall};
   scroll-margin-top: ${props => props.theme.spacing.extraBig};
  }
 `}
`;
