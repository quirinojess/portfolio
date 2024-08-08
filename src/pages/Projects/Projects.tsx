import { Heading, Sections } from "components";
import * as S from "./styled";
import { ProjectsContent } from "content";
import { useActiveSection } from "hooks";

const Projects = () => {
 const testId = "projects";

 const sectionIds = [`${testId}-head`];

 const activeSection = useActiveSection(sectionIds);

 const { headingProjects } = ProjectsContent;

 return (
  <S.Main data-testid={testId}>
   <Sections
    flex="column"
    align="start"
    justify="start"
    id={`${testId}-head`}
    isVisible={activeSection === `${testId}-head`}>
    <Heading content={headingProjects} activeH1 />
   </Sections>
  </S.Main>
 );
};

export { Projects };
