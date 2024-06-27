import styled, { css } from "styled-components";
import { ColumnCenter, RowEnd } from "themes/CommonAligns";

export const ModalClose = styled(RowEnd("button"))`
 background: none;
 border: none;
 cursor: pointer;
 width: ${props => props.theme.proportions.half};
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   width: ${props => props.theme.proportions.threeFourths};
  }
 `}
`;

export const Modal = styled(ColumnCenter("dialog"))`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 999999;
 width: ${props => props.theme.proportions.full};
 height: ${props => props.theme.proportions.full};
 background: ${props => props.theme.colors.transparency};
`;
export const ModalContainer = styled.div`
 color: ${props => props.theme.colors.white};
 background: ${props => props.theme.colors.darkDeep};
 padding: ${props => props.theme.spacing.medium};
 border-radius: ${props => props.theme.borderRadius.small};
 width: ${props => props.theme.proportions.half};
 height: auto;
 ${props => css`
  @media (max-width: ${props.theme.breakpoints.mobile}) {
   width: ${props => props.theme.proportions.threeFourths};
  }
 `}
 img {
  max-width: ${props => props.theme.proportions.full};
  height: auto;
 }
`;
