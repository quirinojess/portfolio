import { ISocial } from "types/Social";
import * as S from "./styled";
import { Icons } from "components";

function Social({ content }: ISocial) {
 const testId = "social";

 const itensMap = content.map(item => (
  <S.SocialItem
   key={item.id}
   href={item.url}
   target="_blank"
   data-testid={item.name}>
   <Icons type={`social-${item.name}`} size="16px" fill="white" />
  </S.SocialItem>
 ));

 return <S.Social data-testid={testId}> {itensMap} </S.Social>;
}

export { Social };
