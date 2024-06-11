import { useState } from "react";
import { IList } from "types/List";
import * as S from "./styled";

function List({ content, isLink, isModal }: IList) {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [modalContent, setModalContent] = useState("");

 const handleLinkClick = (link: string) => {
  setModalContent(link);
  setIsModalOpen(true);
 };

 const modalComponent = isModalOpen && (
  <S.Modal onClick={() => setIsModalOpen(false)}>
   <iframe
    src={modalContent}
    title="Modal Content"
    style={{ width: "70%", height: "70%" }}
   />
  </S.Modal>
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
     <S.ListItemLink onClick={() => handleLinkClick(item.link)}>
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
