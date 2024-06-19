import { ISocial } from "types/Social";
import * as S from "./styled";
import { Icons } from "components/";

function Social({ content }: ISocial) {
 const itensMap = content.map(item => (
  <S.SocialItem key={item.id} href={item.url} target="_blank">
   <Icons type={`social-${item.name}`} size="20px" fill="white" />
  </S.SocialItem>
 ));

 return <S.Social> {itensMap} </S.Social>;
}

export { Social };
