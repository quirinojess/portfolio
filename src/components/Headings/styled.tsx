import styled from "styled-components";

export const H1 = styled.h1`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.h1};
 font-weight: 800;
 line-height: ${props => props.theme.spacing.large};
`;

export const H2 = styled.h2`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.h2};
 font-weight: 800;
 line-height: ${props => props.theme.spacing.large};
`;

export const H3 = styled.h3`
 color: ${props => props.theme.colors.primary};
 font-size: ${props => props.theme.typography.h3};
 font-weight: 100;
 line-height: ${props => props.theme.spacing.large};
`;

export const H4 = styled.h4`
 color: ${props => props.theme.colors.secondary};
 font-size: ${props => props.theme.typography.h4};
 font-weight: 700;
 line-height: ${props => props.theme.spacing.large};
`;
