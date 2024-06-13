import styled from "styled-components";
import { IIconsSvg } from "types/Icons";

export const Icon = styled.svg<IIconsSvg>`
 color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.deepDark};
 color: ${props => props.size};
 fill: ${props =>
  props.fill ? props.theme.colors[props.fill] : props.theme.colors.deepDark};
 stroke: ${props =>
  props.stroke
   ? props.theme.colors[props.stroke]
   : props.theme.colors.deepDark};
 width: ${props => props.size};
 height: auto;
`;
