import styled from "styled-components";
import { RowBetween } from "themes/CommonAligns";

export const ProjectsCard = styled(RowBetween("div"))`
 flex-wrap: wrap;
 max-width: ${props => props.theme.proportions.half};
 gap: ${props => props.theme.spacing.large} 0;
 margin-top: ${props => props.theme.spacing.large};
 img {
  width: ${props => props.theme.proportions.full};
  height: auto;
  object-fit: cover;
 }
`;
