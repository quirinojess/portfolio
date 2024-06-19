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
}>`
 display: flex;
 flex-wrap: wrap;
 flex-direction: ${({ flex }) => flex};
 justify-content: ${({ justify }) => justify};
 align-items: ${({ align }) => align};
 gap: ${props => props.theme.spacing.large}
  ${props => props.theme.spacing.medium};
 margin: ${props => props.theme.spacing.extraBig} 0;
`;
