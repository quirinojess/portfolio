import {
 Heading,
 Button,
 Paragraph,
 Headings,
 Figure,
 List,
 Main,
 Timeline,
 Sections,
} from "components";
import { HomeContent } from "content";
import { useActiveSection } from "hooks";

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
  readList,
 } = HomeContent;

 const readMap = readList.map(readItem => (
  <Sections
   key={readItem.id}
   flex={"row"}
   justify={"start"}
   align={"center"}
   id={`${testId}-read`}
   isVisible={activeSection === `${testId}-read`}>
   <Figure
    alt={readItem.img.alt}
    src={readItem.img.src}
    title={readItem.img.title}
    width={readItem.img.width}
    height={readItem.img.height}
   />
   <Paragraph content={readItem.description} proportion={"half"} />
   <Button content={readItem.button} />
  </Sections>
 ));

 return (
  <Main testId={testId}>
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
    {readMap}
   </Sections>
  </Main>
 );
};

export { Home };
