import { IModal } from "types/Modal";
import * as S from "./styled";

function Modal({ setIsOpenModal, children }: IModal) {
 return (
  <S.Modal
   onClick={() => setIsOpenModal(false)}
   role="dialog"
   aria-modal="true">
   <S.ModalClose onClick={() => setIsOpenModal(false)}>X</S.ModalClose>
   <S.ModalContainer>{children} </S.ModalContainer>
  </S.Modal>
 );
}

export { Modal };
