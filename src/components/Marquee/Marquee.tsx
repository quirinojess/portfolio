import { TMarquee } from "types/Marquee";
import * as S from "./styled";

function Marquee({ content }: TMarquee) {
 const testId = "marquee";

 const itemsMap = content.map(item => (
  <S.MarqueeText key={item.id} isHighlighted={item.isHighlighted}>
   {item.text}
  </S.MarqueeText>
 ));

 return (
  <S.Marquee data-testid={testId}>
   {[...Array(10)].map((_: string, index: number) => (
    <S.MarqueeRotate key={index}>{itemsMap}</S.MarqueeRotate>
   ))}
  </S.Marquee>
 );
}

export { Marquee };
