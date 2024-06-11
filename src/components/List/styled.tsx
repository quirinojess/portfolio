import styled from "styled-components";

export const List = styled.ul`
 line-height: ${props => props.theme.spacing.small};
`;

export const ListItem = styled.li`
 display: flex;
 justify-content: space-between;
 align-items: center;
 list-style: none;
 border-bottom: ${props => props.theme.borders.thin};
 border-color: ${props => props.theme.colors.primary};

 margin-bottom: ${props => props.theme.spacing.medium};
 transition: ${props => props.theme.transitions.medium} ease;
 &:hover {
  border-color: ${props => props.theme.colors.secondary};
 }
`;

export const ListItemTitle = styled.div`
 display: flex;
 flex-direction: column;
 span {
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.small};
  font-weight: 600;
 }
 p {
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.large};
  font-weight: 200;
 }
`;

export const ListItemLink = styled.a`
 color: ${props => props.theme.colors.white};
 font-size: ${props => props.theme.typography.verySmall};
 font-weight: 700;
 text-decoration: none;
 cursor: pointer;
`;

export const Modal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;

 /* Modal Content */
 & > div {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
 }
`;
