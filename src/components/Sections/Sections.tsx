import { ISections } from "types/Sections";
import * as S from "./styled";

function Sections({ children, flex, justify, align }: ISections) {
 return (
  <S.Sections flex={flex} justify={justify} align={align}>
   {children}
  </S.Sections>
 );
}

export { Sections };
