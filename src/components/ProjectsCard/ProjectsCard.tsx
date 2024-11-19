import { TCard } from "types/Card";
import * as S from "./styled";
import { Button, Figure, Headings } from "components";

function ProjectsCard({ content }: TCard) {
 const { image, title, button } = content;

 const handleClick = () => {
  window.location.href = `project/${button.target}`;
 };

 return (
  <S.ProjectsCard onClick={handleClick}>
   <Figure
    alt={image.alt}
    src={image.src}
    title={image.title}
    width={image.width}
    height={image.height}
   />
   <Headings title={title} type={"h3"} />
   <Button content={button} variant="secondary" paramType="'project'" />
  </S.ProjectsCard>
 );
}

export { ProjectsCard };
