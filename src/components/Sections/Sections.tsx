import { ISections } from "types/Sections";
import * as S from "./styled";

function Sections({
 children,
 flex,
 justify,
 align,
 id,
 isVisible,
}: ISections) {
 return (
  <S.Sections
   flex={flex}
   justify={justify}
   align={align}
   data-testid={id}
   id={id}
   isVisible={isVisible}>
   {children}
  </S.Sections>
 );
}

export { Sections };
