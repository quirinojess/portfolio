import styled, { css } from "styled-components";
import { TParagraphProportions } from "types/Paragraph";

export const Paragraph = styled.p<{ proportion: TParagraphProportions }>`
 width: ${({ proportion, theme }) => theme.proportions[proportion] || "auto"};
 font-size: ${props => props.theme.typography.p};
 color: ${props => props.theme.colors.white};
 line-height: ${props => props.theme.spacing.large};
 video {
  max-width: ${props => props.theme.proportions.full};
  height: auto;
 }
 blockquote {
  border-top: ${props => props.theme.borders.thin};
  border-bottom: ${props => props.theme.borders.thin};
  border-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.small};
 }
 @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  padding: ${props => props.theme.spacing.small};
 }
 ${props => css`
  @media (min-width: ${props.theme.breakpoints.large}) {
   font-size: ${props => props.theme.typography.extraMedium};
  }
  @media (max-width: ${props.theme.breakpoints.desktop}) {
   width: ${props => props.theme.proportions.half};
  }
  @media (max-width: ${props.theme.breakpoints.tablet}) {
   width: ${props => props.theme.proportions.full};
  }
 `}
 img {
  max-width: ${props => props.theme.proportions.full};
  height: auto;
 }
`;
export const Tooltip = styled.div`
 position: absolute;
 background-color: rgba(0, 0, 0, 0.7);
 color: ${props => props.theme.colors.white};
 padding: ${props => props.theme.spacing.small};
 border-radius: ${props => props.theme.borderRadius.small};
 transition: ${props => props.theme.transitions.short};
 transform: translate(50%, -300%);
 visibility: hidden;
 ]pointer-events: none;
`;

export const StyledImageContainer = styled.div`
 position: relative;
 display: inline-block;
 &:hover ${Tooltip} {
  visibility: visible;
 }
`;

export const StyledImage = styled.img`
 max-width: ${props => props.theme.proportions.full};
 height: auto;
 border-radius: ${props => props.theme.borderRadius.small};
`;
