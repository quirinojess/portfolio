import { IFigure } from "types/Figure";
import * as S from "./styled";

function Figure({ src, alt, title, width, height }: IFigure) {
 return (
  <S.Figure src={src} alt={alt} title={title} width={width} height={height} />
 );
}

export { Figure };
