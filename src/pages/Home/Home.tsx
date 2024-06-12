import {
 Logo,
 Menu,
 Heading,
 Button,
 Paragraph,
 Headings,
 Figure,
 List,
 Marquee,
} from "components";
import * as S from "./styled";
import { HomeContent } from "content";
import jess from "assets/images/about-me.png";

const Home = () => {
 const testId = "home";
 const { menu, heading, button, description, certifieds, skills } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <S.Header>
    <Logo /> <Menu content={menu} />
   </S.Header>
   <Heading content={heading} />
   <Button content={button} />
   <Paragraph content={description} proportion={"threeFourths"} />
   <Headings title="Tests" type="h1" />
   <Headings title="Tests" type="h2" />
   <Headings title="Tests" type="h3" />
   <Headings title="Tests" type="h4" />
   <Figure
    alt="IMAGEM AQUI"
    src={jess}
    title="Teste"
    width="300"
    height="auto"
   />
   <List content={certifieds} isModal />
   <Marquee content={skills} />
  </S.Main>
 );
};

export { Home };
