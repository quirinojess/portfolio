import { Logo, Menu, Heading, Button, Paragraph } from "components";
import * as S from "./styled";
import { HomeContent } from "content";

const Home = () => {
 const testId = "home";
 const { menu, heading, button, description } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <S.Header>
    <Logo /> <Menu content={menu} />
   </S.Header>
   <Heading content={heading} />
   <Button content={button} />
   <Paragraph content={description} proportion={"threeFourths"} />
  </S.Main>
 );
};

export { Home };
