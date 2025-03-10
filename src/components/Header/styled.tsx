import styled from "styled-components";
import { RowAround } from "themes/CommonAligns";

export const Header = styled(RowAround("header"))`
 width: ${props => props.theme.proportions.full};
 margin-bottom: 400px;
 position: fixed;
 top: 0;
 z-index: 1;
 background: ${props => props.theme.colors.darkDeep};
 padding: ${props => props.theme.spacing.large} 0;
 @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  justify-content: space-between;
 }
`;
