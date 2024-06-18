import styled from "styled-components";
import { RowBetween } from "themes/CommonAligns/CommonAligns";

export const Main = styled.div`
 width: ${props => props.theme.proportions.threeFourths};
 margin: 0 auto;
`;

export const Header = styled(RowBetween("div"))`
 width: ${props => props.theme.proportions.full};
`;
