import { THeadings } from "types/Heading";
import * as S from "./styled";

function Headings({ title, type }: THeadings) {
 switch (type) {
  case "h1":
   return <S.H1>{title}</S.H1>;
  case "h2":
   return <S.H2>{title}</S.H2>;
  case "h3":
   return <S.H3>{title}</S.H3>;
  default:
   return <S.H4>{title}</S.H4>;
 }
}

export { Headings };
