
export type TModal ={
    setIsOpenModal:  React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export type TModalContent ={
    imgLink?: string;
    imgAlt?: string;
    text?: string;
    description?: string;
}

