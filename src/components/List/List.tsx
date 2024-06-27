import { useState } from "react";
import { IList, IListItem } from "types/List";
import * as S from "./styled";
import { Modal } from "components";
import { IModalContent } from "types/Modal";

function List({ content, isLink, isModal }: IList) {
 const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
 const [modalContent, setModalContent] = useState<IModalContent>({});

 const handleLinkClick = (item: IListItem) => {
  setModalContent({
   imgLink: item.link,
   imgAlt: item.description,
  });
  setIsOpenModal(true);
 };

 const modalComponent = isOpenModal && (
  <Modal setIsOpenModal={setIsOpenModal}>
   {modalContent?.imgLink && (
    <img src={modalContent.imgLink} alt={modalContent.imgAlt} />
   )}
   {modalContent?.text && (
    <>
     <h2>{modalContent.text}</h2>
     <p>{modalContent.description}</p>
    </>
   )}
  </Modal>
 );

 const listMap = content.map(item => {
  return (
   <S.ListItem key={item.id}>
    <S.ListItemTitle>
     <span>{item.description}</span>
     <p> {item.title}</p>
    </S.ListItemTitle>
    {isLink && (
     <S.ListItemLink href={item.link}> {item.linkDescription}</S.ListItemLink>
    )}
    {isModal && (
     <S.ListItemLink onClick={() => handleLinkClick(item)}>
      {item.linkDescription}
     </S.ListItemLink>
    )}
   </S.ListItem>
  );
 });

 return (
  <S.List>
   {listMap}
   {modalComponent}
  </S.List>
 );
}

export { List };
