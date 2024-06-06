import { IHeading } from "types/Heading";
import * as S from "./styled";

function Heading({ content }: { content: IHeading }) {
 const { title, subtitle, activeH1 } = content;

 return (
  <S.Heading>
   {activeH1 ? <S.H1>{title}</S.H1> : <S.H2>{title}</S.H2>}
   <S.H3>{subtitle}</S.H3>
  </S.Heading>
 );
}

export { Heading };
