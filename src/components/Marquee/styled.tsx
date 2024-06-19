import styled, { keyframes } from "styled-components";
import { RowBetween } from "themes/CommonAligns/CommonAligns";

export const marqueeAnimation = keyframes`
from {transform: translateX(0);}
to{transform: translateX(calc(-100% - var(--gap)));}
`;

export const Marquee = styled.div`
 --gap: ${props => props.theme.spacing.medium};
 position: relative;
 display: flex;
 overflow: hidden;
 width: ${props => props.theme.proportions.full};
 margin: ${props => props.theme.spacing.extraLarge} 0;
 border-top: ${props => props.theme.borders.thin};
 border-bottom: ${props => props.theme.borders.thin};
 border-color: ${props => props.theme.colors.secondary};
`;

export const MarqueeRotate = styled(RowBetween("div"))`
 animation: ${marqueeAnimation} ${props => props.theme.transitions.extremeLong}
  linear infinite;
 gap: var(--gap);
`;

export const MarqueeText = styled.div<{ isHighlighted?: boolean }>`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.medium};
 font-weight: ${props => (props.isHighlighted ? "600" : "200")};
 white-space: nowrap;
 padding: ${props => props.theme.spacing.medium};
`;
