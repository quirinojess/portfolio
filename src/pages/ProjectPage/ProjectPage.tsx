import { useEffect } from "react";
import { Headings, Paragraph, Sections, Button } from "components";
import * as S from "./styled";
import { useActiveSection } from "hooks";
import { useParams } from "react-router-dom";
import { GeneralContent } from "content";
import { ScrollToTop } from "utils";
import { useProjects } from "context/ProjectContext";
import { TProject } from "types/Project";

const ProjectPage = () => {
 const { id } = useParams<{ id: string }>();
 const { buttons } = GeneralContent;
 const { backButton } = buttons;
 const testId = "project";
 const sectionIds = [`${testId}-content`];
 const activeSection = useActiveSection(sectionIds);

 const { projects } = useProjects();

 const projectId = Number(id);

 const singleProject = projects?.find(
  (project: TProject) => project.id === projectId
 );

 useEffect(() => {
  ScrollToTop();
 }, []);

 return (
  <S.Main data-testid={testId}>
   <Sections
    flex="column"
    align="start"
    justify="start"
    id={`${testId}-content`}
    isVisible={activeSection === `${testId}-content`}>
    {singleProject ? (
     <>
      <Headings title={singleProject.title.rendered} type={"h1"} />
      <Paragraph content={singleProject.content} proportion="full" />
     </>
    ) : (
     "No project selected"
    )}
    <Button content={backButton} />
   </Sections>
  </S.Main>
 );
};

export { ProjectPage };
