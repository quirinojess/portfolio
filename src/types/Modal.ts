
export interface IModal{
    setIsOpenModal:  React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export interface IModalContent{
    imgLink?: string;
    imgAlt?: string;
    text?: string;
    description?: string;
}

