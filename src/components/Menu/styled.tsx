import styled, { css, keyframes } from "styled-components";
import { RowEnd, ColumnAround } from "themes/CommonAligns";

const openAnimation = keyframes`
  0% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const colorChange = keyframes`
  0% { border-color: var(--border-color-primary); }
  50% { border-color: var(--border-color-secondary); }
`;

export const Container = styled.div`
 position: relative;
`;

export const Hamburger = styled(ColumnAround("button"))<{ isOpen: boolean }>`
 width: ${({ theme }) => theme.sizes.verySmall};
 height: ${({ theme }) => theme.sizes.verySmall};
 margin-right: ${({ theme }) => theme.spacing.large};
 display: none;
 background: none;
 border: none;
 cursor: pointer;
 padding: 0;
 span {
  width: ${({ theme }) => theme.proportions.full};
  height: ${({ theme }) => theme.sizes.hiperSmall};
  background-color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.proportionsl};
 }
 ${({ isOpen }) =>
  isOpen &&
  css`
   span:nth-child(1) {
    transform: rotate(45deg) translate(-2px, 10px);
   }
   span:nth-child(2) {
    opacity: 0;
   }
   span:nth-child(3) {
    transform: rotate(-45deg) translate(-3px, -10px);
   }
  `}
 @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  display: flex;
 }
`;

export const Navbar = styled(RowEnd("nav"))<{ isOpen: boolean }>`
 @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  background-color: ${({ theme }) => theme.colors.darkDeep};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  margin-top: ${({ theme }) => theme.spacing.large};
  animation: ${openAnimation} ${({ theme }) => theme.transitions.short};
  justify-content: center;
  position: fixed;
  top: 10;
  right: 0;
  left: 0;
  z-index: 999;
  padding: ${({ theme }) => theme.spacing.medium};
 }
 @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  margin-top: ${({ theme }) => theme.spacing.medium};
 }
`;

export const NavItem = styled.button`
 --border-color-primary: ${({ theme }) => theme.colors.secondary};
 --border-color-secondary: ${({ theme }) => theme.colors.primary};
 background: none;
 border: none;
 cursor: pointer;
 font-size: ${({ theme }) => theme.typography.medium};
 padding: ${({ theme }) => theme.spacing.small};
 color: ${({ theme }) => theme.colors.white};
 margin: 0 ${({ theme }) => theme.spacing.small};
 outline: 0;
 position: relative;
 user-select: none;
 touch-action: manipulation;
 &:after {
  content: "";
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.darkDeep};
  width: ${({ theme }) => theme.proportions.full};
  height: ${({ theme }) => theme.proportions.full};
  transition: ${({ theme }) => theme.transitions.short};
  z-index: -1;
  position: absolute;
  top: 7px;
  left: 7px;
 }
 &:hover:after {
  animation: ${colorChange} ${({ theme }) => theme.transitions.short} linear
   infinite;
  top: 0;
  left: 0;
 }
 @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  font-size: ${({ theme }) => theme.typography.small};
  padding: ${({ theme }) => theme.spacing.verySmall};
 }
`;
