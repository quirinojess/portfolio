import { ICard } from "types/Card";
import * as S from "./styled";
import { Button, Figure, Headings } from "components";

function ProjectsCard({ content }: ICard) {
 const { image, title, button } = content;

 return (
  <S.ProjectsCard>
   <Figure
    alt={image.alt}
    src={image.src}
    title={image.title}
    width={image.width}
    height={image.height}
   />
   <Headings title={title} type={"h3"} />
   <Button content={button} variant="secondary" isProject />
  </S.ProjectsCard>
 );
}

export { ProjectsCard };
