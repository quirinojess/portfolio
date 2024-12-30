import { THeading } from "types/Heading";
import * as S from "./styled";

function Heading({ content, activeH1 = false }: THeading) {
 const { title, subtitle } = content;

 return (
  <S.Heading>
   {activeH1 ? <S.H1>{title}</S.H1> : <S.H2>{title}</S.H2>}
   <S.H3 activeH1={activeH1}>{subtitle}</S.H3>
  </S.Heading>
 );
}

export { Heading };
