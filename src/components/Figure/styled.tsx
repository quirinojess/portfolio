import styled from "styled-components";
import { TFigure } from "types/Figure";

export const Figure = styled.img<TFigure>`
 width: ${props => props.width};
 height: ${props => props.height};
`;
