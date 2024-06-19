import * as S from "./styled";
import { Logo, Menu } from "components";
import { GeneralContent } from "content";

function Header() {
 const { menu } = GeneralContent;

 return (
  <S.Header>
   <Logo />
   <Menu content={menu} />
  </S.Header>
 );
}

export { Header };
