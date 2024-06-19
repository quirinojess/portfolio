import styled from "styled-components";
import { RowStart, ColumnCenter } from "themes/CommonAligns/CommonAligns";

export const TimelineContainer = styled(RowStart("div"))`
 width: ${props => props.theme.proportions.full};
`;

export const Circle = styled.div`
 width: ${props => props.theme.sizes.verySmall};
 height: ${props => props.theme.sizes.verySmall};
 margin: ${props => props.theme.spacing.center};
 background-color: ${props => props.theme.colors.primary};
 border-radius: ${props => props.theme.proportions.half};
`;

export const Period = styled.span`
 font-size: ${props => props.theme.typography.medium};
 color: ${props => props.theme.colors.white};
 margin-bottom: ${props => props.theme.spacing.medium};
 font-weight: 100;
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
 }
`;
