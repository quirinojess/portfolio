import styled from "styled-components";
import { ColumnCenter, RowEnd } from "themes/CommonAligns/CommonAligns";

export const ModalClose = styled(RowEnd("button"))`
 width: ${props => props.theme.proportions.half};
 background: none;
 border: none;
 cursor: pointer;
`;

export const Modal = styled(ColumnCenter("div"))`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 999;
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
 img {
  max-width: ${props => props.theme.proportions.full};
  height: auto;
 }
`;
