import styled from "styled-components";

const ColumnCenter = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const ColumnStart = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: center;
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

const RowAround = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

const RowBetween = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const RowBetweenStart = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
`;

const RowEnd = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;

export {
 ColumnCenter,
 ColumnStart,
 RowCenter,
 RowStart,
 RowAround,
 RowBetween,
 RowBetweenStart,
 RowEnd,
};
