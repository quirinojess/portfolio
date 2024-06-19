import { ISections } from "types/Sections";
import * as S from "./styled";

function Sections({ children, flex, justify, align, id }: ISections) {
 return (
  <S.Sections
   flex={flex}
   justify={justify}
   align={align}
   data-testid={id}
   id={id}>
   {children}
  </S.Sections>
 );
}

export { Sections };
