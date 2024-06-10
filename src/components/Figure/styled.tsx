import styled from "styled-components";
import { IFigure } from "types/Figure";

export const Figure = styled.img<IFigure>`
 width: ${props => props.width};
 height: ${props => props.height};
`;
