import styled from "styled-components";
import { RowBetween } from "themes/CommonAligns";

export const ProjectsCard = styled(RowBetween("div"))`
 flex-wrap: wrap;
 max-width: ${props => props.theme.proportions.half};
 gap: ${props => props.theme.spacing.medium} 0;
 img {
  width: ${props => props.theme.proportions.full};
  height: auto;
  object-fit: cover;
 }
`;
