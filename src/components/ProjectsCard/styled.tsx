import styled, { css } from "styled-components";
import { RowBetween } from "themes/CommonAligns";

export const ProjectsCard = styled(RowBetween("div"))`
 flex-wrap: wrap;
 width: ${props => props.theme.proportions.full};
 max-width: ${props => props.theme.proportions.half};
 gap: ${props => props.theme.spacing.medium} 0;
 overflow: hidden;
 position: relative;
 cursor: pointer;
 img {
  width: ${props => props.theme.proportions.full};
  height: ${props => props.theme.sizes.large};
  object-fit: cover;
  transition: ${props => props.theme.transitions.short};
 }
 img:hover {
  transform: scale(1.1);
 }
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.tablet}) {
   img {
    height: ${props.theme.sizes.medium};
   }
  }
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   max-width: ${props => props.theme.proportions.full};
   height: ${props.theme.sizes.large};
  }
 `}
`;
