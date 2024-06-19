import {
 Header,
 Heading,
 Button,
 Paragraph,
 Headings,
 Figure,
 List,
 Timeline,
 Sections,
 Footer,
} from "components";
import * as S from "./styled";
import { HomeContent } from "content";

const Home = () => {
 const testId = "home";
 const {
  headingHome,
  button,
  description,
  certifieds,
  experience,
  headingAbout,
  descriptionAbout,
  headingRead,
  descriptionRead,
  buttonRead,
 } = HomeContent;

 return (
  <S.Main data-testid={testId}>
   <Header />

   <Sections flex="column" align="start" justify="start">
    <Heading content={headingHome} activeH1 />
    <Paragraph content={description} proportion={"threeFourths"} />
    <Button content={button} />
   </Sections>

   <Sections flex="column" align="start" justify="start">
    <Headings title="Experience" type="h2" />
    <Timeline content={experience} />
   </Sections>

   <Sections flex="row" align="center" justify="space-between">
    <Heading content={headingAbout} />
    <Figure
     alt="Serious woman with dark hair and pink blouse"
     src="assets/images/about-me.png"
     title="Jessica Quirino"
     width="200px"
     height="auto"
    />
    <Paragraph content={descriptionAbout} proportion={"threeFourths"} />
   </Sections>

   <Sections flex="row" align="center" justify="space-between">
    <Headings title="Certifieds" type="h2" />
    <List content={certifieds} isModal />
   </Sections>

   <Sections flex="row" align="center" justify="space-between">
    <Heading content={headingRead} />
    <Figure
     alt="Ebook cover with a girl"
     src="assets/images/ebook-ia.png"
     title="IA NO FRONT END - Potencialize seu desenvolvimento"
     width="180px"
     height="auto"
    />
    <Paragraph content={descriptionRead} proportion={"half"} />
    <Button content={buttonRead} />
   </Sections>

   <Footer />
  </S.Main>
 );
};

export { Home };
