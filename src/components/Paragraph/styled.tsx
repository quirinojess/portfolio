import styled from "styled-components";
import { IParagraphProportions } from "types/Paragraph";

export const Paragraph = styled.p<{ proportion: IParagraphProportions }>`
 width: ${({ proportion, theme }) => theme.proportions[proportion] || "auto"};
 margin: ${props => props.theme.spacing.extraLarge} 0;
 font-size: ${props => props.theme.typography.p};
 color: ${props => props.theme.colors.white};
 line-height: ${props => props.theme.spacing.large};
`;