import { ITimeline } from "types/Timeline";
import * as S from "./styled";
import Headings from "components/Headings";
import Paragraph from "components/Paragraph";

function Timeline({ content }: ITimeline) {
 const itensMap = content.map(item => (
  <S.TimelineItemContainer>
   <S.Date>{item.date}</S.Date>
   <S.Circle />
   <Headings title={item.company} type={"h4"} />
   <Headings title={item.title} type={"h3"} />
   <Paragraph
    content={{ text: item.description }}
    proportion={"threeFourths"}
   />
  </S.TimelineItemContainer>
 ));

 return <S.TimelineContainer> {itensMap}</S.TimelineContainer>;
}
export { Timeline };
