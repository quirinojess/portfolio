import { Heading, Sections, ProjectsCard } from "components";
import * as S from "./styled";
import { ProjectsContent } from "content";
import { useActiveSection } from "hooks";
import { ScrollToTop } from "utils";
import { useEffect } from "react";

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
    button: { label: "View Full", target: "button-dois" },
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
    button: { label: "View Full", target: "button-teste" },
   },
   {
    id: 3,
    image: {
     alt: "image",
     src: "assets/images/thumb-card.png",
     title: "image",
     width: 400,
     height: 400,
    },
    title: "Project Three",
    button: { label: "View Full", target: "button-teste" },
   },
  ],
 };

 const projectsMap = mockApi.projects.map((project: any) => (
  <ProjectsCard key={project.id} content={project} />
 ));

 useEffect(() => {
  ScrollToTop();
 }, []);

 return (
  <S.Main data-testid={testId}>
   <Sections
    flex="row"
    align="start"
    justify="space-between"
    id={`${testId}-projects`}
    isVisible={activeSection === `${testId}-projects`}>
    <Heading content={headingProjects} activeH1 />
    {projectsMap}
   </Sections>
  </S.Main>
 );
};

export { Projects };
