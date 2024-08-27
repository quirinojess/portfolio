import styled, { css } from "styled-components";
import { IParagraphProportions } from "types/Paragraph";

export const Paragraph = styled.p<{ proportion: IParagraphProportions }>`
 width: ${({ proportion, theme }) => theme.proportions[proportion] || "auto"};
 font-size: ${props => props.theme.typography.p};
 color: ${props => props.theme.colors.white};
 line-height: ${props => props.theme.spacing.large};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   width: ${props => props.theme.proportions.full};
  }
 `}
 img {
  max-width: 100%;
  height: auto;
 }
`;
