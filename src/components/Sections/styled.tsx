import styled, { css } from "styled-components";
import {
 ISectionsAlign,
 ISectionsFlex,
 ISectionsJustify,
} from "types/Sections";

export const Sections = styled.section<{
 flex: ISectionsFlex;
 justify: ISectionsJustify;
 align: ISectionsAlign;
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
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   align-items: flex-start;
  }
 `}
`;
