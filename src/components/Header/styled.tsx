import styled, { css } from "styled-components";
import { RowCenter } from "themes/CommonAligns";

export const Header = styled(RowCenter("header"))`
 width: ${props => props.theme.proportions.full};
 position: fixed;
 top: 0;
 z-index: 9999;
 background: ${props => props.theme.colors.darkDeep};
 padding: ${props => props.theme.spacing.medium} 0
  ${props => props.theme.spacing.small} 0;
 gap: 0 50%;
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   gap: 0 4%;
  }
 `}
`;
