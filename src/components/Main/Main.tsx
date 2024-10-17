import { TMain } from "types/Main";
import * as S from "./styled";

function Main({ children, testId }: TMain) {
 return <S.Main data-testId={testId}>{children}</S.Main>;
}

export { Main };
