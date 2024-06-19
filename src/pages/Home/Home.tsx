import {
 Header,
 Heading,
 Button,
 Paragraph,
 Headings,
 Figure,
 List,
 Marquee,
 Timeline,
 Social,
} from "components";
import * as S from "./styled";
import { HomeContent } from "content";

const Home = () => {
 const testId = "home";
 const {
  menu,
  heading,
  button,
  description,
  certifieds,
  skills,
  experience,
  social,
 } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <Header content={menu} />
   <Heading content={heading} />
   <Paragraph content={description} proportion={"threeFourths"} />
   <Button content={button} />
   <S.Section>
    <Headings title="Experience" type="h2" />
    <Timeline content={experience} />
   </S.Section>
   <S.Section>
    <Headings title="Certifieds" type="h2" />
    <List content={certifieds} isModal />
   </S.Section>
   <S.Section>
    <S.AlignTitles>
     <Headings title="ABOUT" type="h2" />
     <Headings title="Jessica Quirino" type="h3" />
    </S.AlignTitles>
    <Figure
     alt="Serious woman with dark hair and pink blouse"
     src="assets/images/about-me.png"
     title="Jessica Quirino"
     width="130px"
     height="auto"
    />
    <Paragraph content={description} proportion={"full"} />
   </S.Section>
   <Social content={social} />
   <Marquee content={skills} />
  </S.Main>
 );
};

export { Home };
