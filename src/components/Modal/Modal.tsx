import { IModal } from "types/Modal";
import * as S from "./styled";
import { Icons } from "components";

function Modal({ setIsOpenModal, children }: IModal) {
 return (
  <S.Modal
   onClick={() => setIsOpenModal(false)}
   role="dialog"
   aria-modal="true">
   <S.ModalClose onClick={() => setIsOpenModal(false)}>
    <Icons type="close" size="30px" fill="secondary" />
   </S.ModalClose>
   <S.ModalContainer>{children} </S.ModalContainer>
  </S.Modal>
 );
}

export { Modal };
