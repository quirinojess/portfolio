import styled from "styled-components";
import { ColumnStart, RowBetween } from "themes/CommonAligns/CommonAligns";

export const Main = styled.div`
 width: ${props => props.theme.proportions.threeFourths};
 margin: 0 auto;
`;

export const Header = styled(RowBetween("div"))`
 width: ${props => props.theme.proportions.full};
`;

export const Section = styled(RowBetween("div"))`
 width: ${props => props.theme.proportions.full};
 gap: 0 ${props => props.theme.sizes.verySmall};
`;

export const AlignTitles = styled(ColumnStart("div"))`
 width: ${props => props.theme.proportions.auto};
`;
