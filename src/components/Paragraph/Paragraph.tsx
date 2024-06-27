import { IParagraph } from "types/Paragraph";
import * as S from "./styled";

function Paragraph({ content, proportion }: IParagraph) {
 const { text } = content;

 return (
  <S.Paragraph
   proportion={proportion}
   dangerouslySetInnerHTML={{ __html: text }}
  />
 );
}

export { Paragraph };
