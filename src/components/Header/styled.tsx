import styled from "styled-components";
import { RowBetween } from "themes/CommonAligns/CommonAligns";

export const Header = styled(RowBetween("header"))`
 width: ${props => props.theme.proportions.threeFourths};
 margin-bottom: 500px;
 position: fixed;
 top: 0;
 z-index: 9999;
 background: ${props => props.theme.colors.darkDeep};
 padding: ${props => props.theme.spacing.large} 0;
`;
