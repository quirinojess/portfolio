import styled from "styled-components";

export const ShadowDiv = styled.div<{ x: number; y: number }>`
 position: fixed;
 left: ${props => props.x}px;
 top: ${props => props.y}px;
 width: 1px;
 height: 1px;
 border-radius: ${props => props.theme.proportions.half};
 background-color: transparent;
 pointer-events: none;
 box-shadow: 0 0 300px 300px rgba(255, 255, 255, 0.1);
 transform: translate(
  -${props => props.theme.proportions.half},
  -${props => props.theme.proportions.half}
 );
`;
