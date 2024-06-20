import styled from "styled-components";
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
 display: flex;
 flex-wrap: wrap;
 flex-direction: ${({ flex }) => flex};
 justify-content: ${({ justify }) => justify};
 align-items: ${({ align }) => align};
 gap: ${props => props.theme.spacing.large}
  ${props => props.theme.spacing.medium};
 margin-top: ${props => props.theme.spacing.extraBig};
 opacity: ${props => (props.isVisible ? "1" : "0")};
 transform: translateY(${props => (props.isVisible ? "0" : "20px")});
 transition: opacity ${props => props.theme.transitions.short},
  transform ${props => props.theme.transitions.short};
`;
