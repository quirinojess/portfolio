import styled, { css } from "styled-components";
import { ColumnStart, RowBetween } from "themes/CommonAligns";

export const List = styled.ul`
 line-height: ${props => props.theme.spacing.small};
 min-width: ${props => props.theme.proportions.threeFourths};
`;

export const ListItem = styled(RowBetween("li"))`
 list-style: none;
 border-bottom: ${props => props.theme.borders.thin};
 border-color: ${props => props.theme.colors.primary};
 margin-bottom: ${props => props.theme.spacing.medium};
 margin-left: -${props => props.theme.spacing.veryLarge};
 transition: ${props => props.theme.transitions.medium} ease;
 &:hover {
  border-color: ${props => props.theme.colors.secondary};
 }
`;

export const ListItemTitle = styled(ColumnStart("div"))`
 span {
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.small};
  font-weight: 600;
 }
 p {
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.medium};
  font-weight: 200;
  line-height: ${props => props.theme.spacing.large};
  ${props => css`
   @media (max-width: ${props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.small};
   }
  `}
 }
`;

export const ListItemLink = styled.a`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.verySmall};
 font-weight: 700;
 line-height: ${props => props.theme.spacing.medium};
 text-decoration: none;
 cursor: pointer;
 text-align: right;
 min-width: ${props => props.theme.sizes.extraMedium};
`;
