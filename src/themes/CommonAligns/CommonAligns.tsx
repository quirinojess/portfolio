import styled from "styled-components";

export const ColumnCenter = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

export const ColumnStart = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: center;
 flex-direction: column;
`;

export const ColumnAround = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-direction: column;
`;

export const RowCenter = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const RowStart = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: center;
 align-items: flex-start;
`;

export const RowAround = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const RowBetween = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

export const RowBetweenStart = (element: keyof JSX.IntrinsicElements) => styled[
 element
]`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
`;

export const RowEnd = (element: keyof JSX.IntrinsicElements) => styled[element]`
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;
