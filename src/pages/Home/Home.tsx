import {
 Heading,
 Button,
 Paragraph,
 Headings,
 Figure,
 List,
 Timeline,
 Sections,
} from "components";
import * as S from "./styled";
import { HomeContent } from "content";
import useActiveSection from "hooks/useActiveSection";

const Home = () => {
 const testId = "home";

 const sectionIds = [
  `${testId}-projects`,
  `${testId}-experience`,
  `${testId}-about`,
  `${testId}-certifieds`,
  `${testId}-read`,
 ];

 const activeSection = useActiveSection(sectionIds);

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
   <Sections
    flex="column"
    align="start"
    justify="start"
    id={`${testId}-projects`}
    isVisible={activeSection === `${testId}-projects`}>
    <Heading content={headingHome} activeH1 />
    <Paragraph content={description} proportion={"threeFourths"} />
    <Button content={button} />
   </Sections>
   <Sections
    flex="column"
    align="start"
    justify="start"
    id={`${testId}-experience`}
    isVisible={activeSection === `${testId}-experience`}>
    <Headings title="Experience" type="h2" />
    <Timeline content={experience} />
   </Sections>

   <Sections
    flex="row"
    align="center"
    justify="space-between"
    id={`${testId}-about`}
    isVisible={activeSection === `${testId}-about`}>
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

   <Sections
    flex="row"
    align="center"
    justify="space-between"
    id={`${testId}-certifieds`}
    isVisible={activeSection === `${testId}-certifieds`}>
    <Headings title="Certifieds" type="h2" />
    <List content={certifieds} isModal />
   </Sections>

   <Sections
    flex="row"
    align="center"
    justify="space-between"
    id={`${testId}-read`}
    isVisible={activeSection === `${testId}-read`}>
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
  </S.Main>
 );
};

export { Home };
