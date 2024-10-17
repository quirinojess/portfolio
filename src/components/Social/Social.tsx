import { TSocial } from "types/Social";
import * as S from "./styled";
import { Icons } from "components";

function Social({ content }: TSocial) {
 const testId = "social";

 const itensMap = content.map(item => (
  <S.SocialItem
   key={item.id}
   href={item.url}
   target="_blank"
   data-testid={item.name}>
   <Icons type={`social-${item.name}`} size="18px" fill="white" />
  </S.SocialItem>
 ));

 return <S.Social data-testid={testId}> {itensMap} </S.Social>;
}

export { Social };
