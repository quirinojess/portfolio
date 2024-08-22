import { useEffect } from "react";
import { Headings, Paragraph, Sections, Figure, Button } from "components";
import * as S from "./styled";
import { useActiveSection } from "hooks";
import { useParams } from "react-router-dom";
import { GeneralContent } from "content";
import { ScrollToTop } from "utils";

const ProjectPage = () => {
 const { id } = useParams();

 const { backButton } = GeneralContent;

 const testId = "project";

 const sectionIds = [`${testId}-content`];

 const activeSection = useActiveSection(sectionIds);

 const mockApi = {
  id: 1,
  images: [
   {
    alt: "image1",
    src: "/assets/images/thumb-card.png",
    title: "image 1",
   },
   {
    alt: "image2",
    src: "/assets/images/thumb-card.png",
    title: "image 2",
   },
  ],
  title: "Project One",
  button: { label: "View Full", target: "button-dois" },
  content: { text: "loremIpsum  loremIpsum  loremIpsum loremIpsu" },
 };

 const imagesMap = mockApi.images.map(image => (
  <Figure
   key={image.src}
   alt={image.alt}
   src={image.src}
   title={image.title}
   width="900"
   height="auto"
  />
 ));

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
    {id ? (
     <>
      <Headings title={id} type={"h1"} />
      {imagesMap}
      <Paragraph content={mockApi.content} proportion="full" />
     </>
    ) : (
     "No project selected"
    )}
    <Button content={backButton[0]} />
   </Sections>
  </S.Main>
 );
};

export { ProjectPage };
