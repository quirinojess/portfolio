import * as S from "./styled";
import { Marquee, Social } from "components";
import { GeneralContent } from "content";

function Footer() {
 const { skills, social } = GeneralContent;
 return (
  <S.Footer>
   <Marquee content={skills} />
   <Social content={social} />
  </S.Footer>
 );
}

export { Footer };
