import styled from "styled-components";

export const ModalClose = styled.button`
 width: ${props => props.theme.proportions.half};
 display: flex;
 justify-content: flex-end;
 background: none;
 border: 0;
 color: ${props => props.theme.colors.secondary};
 font-size: ${props => props.theme.typography.large};
`;

export const Modal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: ${props => props.theme.proportions.full};
 height: ${props => props.theme.proportions.full};
 background: ${props => props.theme.colors.transparency};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;
export const ModalContainer = styled.div`
 color: ${props => props.theme.colors.white};
 background: ${props => props.theme.colors.darkDeep};
 padding: ${props => props.theme.spacing.medium};
 border-radius: ${props => props.theme.borderRadius.small};
 width: ${props => props.theme.proportions.half};
 height: auto;
 img {
  max-width: 100%;
  height: auto;
 }
`;
