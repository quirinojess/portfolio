import { TSections } from "types/Sections";
import * as S from "./styled";

function Sections({
 children,
 flex,
 justify,
 align,
 id,
 isVisible,
 key,
}: TSections) {
 return (
  <S.Sections
   flex={flex}
   justify={justify}
   align={align}
   data-testid={id}
   id={id}
   isVisible={isVisible}
   key={key}>
   {children}
  </S.Sections>
 );
}

export { Sections };
