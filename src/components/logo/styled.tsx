import styled, { css, keyframes } from "styled-components";

const reveal = keyframes`
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const pathAnimation = (strokeWidth: string | undefined) => css`
 stroke-width: ${strokeWidth ? (parseInt(strokeWidth) * 5).toString() : ""};
 stroke-dasharray: 2000;
 stroke-dashoffset: 2000;
 animation: ${reveal} ${props => props.theme.transitions.long} forwards;
`;

export const Svg = styled.svg`
 max-width: ${props => props.theme.sizes.small};
`;

export const Path = styled.path<{ stroke?: string; strokeWidth?: string }>`
 ${props => pathAnimation(props.strokeWidth)};
 stroke: ${props => props.stroke};
`;

export const MaskPath = styled.path<{ strokeWidth?: string }>`
 ${props => pathAnimation(props.strokeWidth)};
`;
