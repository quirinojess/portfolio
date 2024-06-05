import styled from "styled-components";

export const Main = styled.div`
 width: ${props => props.theme.proportions.fourFifths};
 margin: 0 auto;
`;

export const Header = styled.div`
 width: ${props => props.theme.proportions.full};
 display: flex;
 justify-content: space-between;
`;
