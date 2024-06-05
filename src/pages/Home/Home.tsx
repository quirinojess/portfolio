import { Logo, Menu } from "../../components";
import * as S from "./styled";
import { HomeContent } from "../../content/Home/Home";

const Home = () => {
 const testId = "home";
 const { menu } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <S.Header>
    <Logo /> <Menu content={menu} />
   </S.Header>
  </S.Main>
 );
};

export { Home };
