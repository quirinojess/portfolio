import { Heading, Sections, ProjectsCard } from "components";
import * as S from "./styled";
import { ProjectsContent } from "content";
import { useActiveSection } from "hooks";

const Projects = () => {
 const testId = "projects";

 const sectionIds = [`${testId}-head`, `${testId}-projects`];

 const activeSection = useActiveSection(sectionIds);

 const { headingProjects } = ProjectsContent;

 const mockApi = {
  projects: [
   {
    id: 1,
    image: {
     alt: "image",
     src: "assets/images/thumb-card.png",
     title: "image",
     width: 400,
     height: 400,
    },
    title: "Project One",
    button: { label: "View Full", url: "button" },
   },
   {
    id: 2,
    image: {
     alt: "image",
     src: "assets/images/thumb-card.png",
     title: "image",
     width: 400,
     height: 400,
    },
    title: "Project Two",
    button: { label: "View Full", url: "button" },
   },
  ],
 };

 const projectsMap = mockApi.projects.map((project: any) => (
  <ProjectsCard key={project.id} content={project} />
 ));

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

   <Sections
    flex="row"
    align="start"
    justify="space-between"
    id={`${testId}-projects`}
    isVisible={activeSection === `${testId}-projects`}>
    {projectsMap}
   </Sections>
  </S.Main>
 );
};

export { Projects };
