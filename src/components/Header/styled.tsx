import styled from "styled-components";
import { RowBetween } from "themes/CommonAligns/CommonAligns";

export const Header = styled(RowBetween("header"))`
 width: ${props => props.theme.proportions.full};
 margin: ${props => props.theme.spacing.large} 0
  ${props => props.theme.spacing.extraLarge} 0;
`;
