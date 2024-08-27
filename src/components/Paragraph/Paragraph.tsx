import { IParagraph } from "types/Paragraph";
import * as S from "./styled";

function Paragraph({ content, proportion }: IParagraph) {
 const { text, rendered } = content;

 return (
  <S.Paragraph
   proportion={proportion}
   dangerouslySetInnerHTML={{ __html: text || rendered || "" }}
  />
 );
}

export { Paragraph };
