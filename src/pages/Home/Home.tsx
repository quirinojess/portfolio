import { Logo, Menu, Heading, Button } from "components";
import * as S from "./styled";
import { HomeContent } from "content/Home/Home";

const Home = () => {
 const testId = "home";
 const { menu, heading, button } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <S.Header>
    <Logo /> <Menu content={menu} />
   </S.Header>
   <Heading content={heading} />
   <Button content={button} />
  </S.Main>
 );
};

export { Home };
