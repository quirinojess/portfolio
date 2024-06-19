import styled from "styled-components";

const ColumnCenter = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const RowCenter = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: center;
 align-items: center;
`;

const RowStart = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: center;
 align-items: flex-start;
`;

const RowBetween = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const RowEnd = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;

export { ColumnCenter, RowCenter, RowStart, RowBetween, RowEnd };
