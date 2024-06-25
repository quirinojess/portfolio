import { ITimeline } from "types/Timeline";
import * as S from "./styled";
import Headings from "components/Headings";
import Paragraph from "components/Paragraph";

function Timeline({ content }: ITimeline) {
 const itensMap = content.map(item => (
  <S.TimelineItemContainer key={item.id}>
   <S.Period>{item.date}</S.Period>
   <S.Circle />
   <S.TimelineItem>
    <Headings title={item.company} type={"h4"} />
    <Headings title={item.title} type={"h3"} />
    <Paragraph content={{ text: item.description }} proportion={"full"} />
   </S.TimelineItem>
  </S.TimelineItemContainer>
 ));

 return <S.TimelineContainer> {itensMap}</S.TimelineContainer>;
}
export { Timeline };
