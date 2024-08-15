import styled from "styled-components";
import { RowBetween } from "themes/CommonAligns";

export const ProjectsCard = styled(RowBetween("div"))`
 flex-wrap: wrap;
 max-width: ${props => props.theme.proportions.half};
 gap: ${props => props.theme.spacing.large} 0;
 img {
  width: 100%;
  height: auto;
  object-fit: cover;
 }
`;
