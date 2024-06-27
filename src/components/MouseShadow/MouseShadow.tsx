import { useMousePosition } from "hooks";
import * as S from "./styled";

function MouseShadow() {
 const { x, y } = useMousePosition();
 const testId = "shadow-div";

 return <S.ShadowDiv x={x} y={y} data-testid={testId} />;
}

export { MouseShadow };
