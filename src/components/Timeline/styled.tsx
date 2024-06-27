import styled, { css } from "styled-components";
import { RowStart, ColumnCenter } from "themes/CommonAligns";

export const TimelineContainer = styled(RowStart("div"))`
 width: ${props => props.theme.proportions.full};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   flex-direction: column;
  }
 `}
`;

export const Circle = styled.div`
 width: ${props => props.theme.sizes.verySmall};
 height: ${props => props.theme.sizes.verySmall};
 background-color: ${props => props.theme.colors.primary};
 border-radius: ${props => props.theme.proportions.half};
 position: absolute;
 top: ${props => props.theme.spacing.veryLarge};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   top: auto;
   left: ${props => props.theme.spacing.small};
  }
 `};
`;

export const Period = styled.span`
 font-size: ${props => props.theme.typography.medium};
 color: ${props => props.theme.colors.white};
 font-weight: 100;
 margin-bottom: ${props => props.theme.spacing.small};
 position: absolute;
 top: ${props => props.theme.spacing.medium};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   top: auto;
   left: -${props => props.theme.spacing.medium};
   writing-mode: vertical-rl;
   transform: rotate(180deg);
  }
 `}
`;

export const TimelineItemContainer = styled(ColumnCenter("div"))`
 position: relative;
 text-align: center;
 color: ${props => props.theme.colors.white};
 width: ${props => props.theme.proportions.full};

 h3 {
  margin: ${props => props.theme.spacing.medium} 0;
 }
 h4 {
  font-size: ${props => props.theme.typography.small};
  margin: ${props => props.theme.spacing.medium} 0;
 }
 p {
  margin-top: -${props => props.theme.spacing.extraSmall};
 }

 &:after {
  content: "";
  position: absolute;
  top: ${props => props.theme.spacing.extraLarge};
  width: ${props => props.theme.proportions.full};
  height: ${props => props.theme.strokes.thin}px;
  background-color: ${props => props.theme.colors.primary};
  z-index: -1;

  ${props => css`
   @media (max-width: ${props.theme.breakpoints.mobile}) {
    top: 0;
    left: ${props.theme.spacing.medium};
    width: ${props.theme.strokes.thin}px;
    height: 100%;
   }
  `}
 }
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   margin-left: ${props.theme.spacing.medium};
  }
 `}
`;

export const TimelineItem = styled(ColumnCenter("div"))`
 width: ${props => props.theme.proportions.threeFourths};
 text-align: center;
 margin-top: ${props => props.theme.spacing.big};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   align-items: flex-start;
   margin-top: ${props => props.theme.spacing.medium};
   margin-left: ${props.theme.spacing.big};
   text-align: left;
  }
 `};
`;
