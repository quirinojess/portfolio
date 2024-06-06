import { Logo, Menu, Heading } from "../../components";
import * as S from "./styled";
import { HomeContent } from "../../content/Home/Home";

const Home = () => {
 const testId = "home";
 const { menu, heading } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <S.Header>
    <Logo /> <Menu content={menu} />
   </S.Header>
   <Heading content={heading} />
  </S.Main>
 );
};

export { Home };
