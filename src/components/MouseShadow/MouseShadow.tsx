import useMousePosition from "hooks/useMousePosition";
import * as S from "./styled";

function MouseShadow() {
 const { x, y } = useMousePosition();

 return <S.ShadowDiv x={x} y={y} />;
}

export { MouseShadow };
