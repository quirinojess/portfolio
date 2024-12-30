import { TParagraph } from "types/Paragraph";
import * as S from "./styled";

function Paragraph({ content, proportion, isPost }: TParagraph) {
 const { text, rendered } = content;

 return (
  <S.Paragraph
   proportion={proportion}
   dangerouslySetInnerHTML={{ __html: text || rendered || "" }}
  />
 );
}

export { Paragraph };
