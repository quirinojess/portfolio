import { TParagraph } from "types/Paragraph";
import { useEffect, useState } from "react";
import * as S from "./styled";

function Paragraph({ content, proportion, isPost }: TParagraph) {
 const { text, rendered } = content;
 const [elements, setElements] = useState<JSX.Element[]>([]);

 const contentRender = isPost ? elements : text;

 useEffect(() => {
  const container = document.createElement("div");
  container.innerHTML = text || rendered || "";

  const reactElements: JSX.Element[] = Array.from(container.childNodes)
   .map((node, index) => {
    const isBlockElement = (node: Node): boolean => {
     return (
      node.nodeName === "DIV" ||
      node.nodeName === "P" ||
      node.nodeName === "FIGURE"
     );
    };

    if (
     isBlockElement(node) &&
     !node.textContent?.trim() &&
     !(node as Element).childElementCount
    ) {
     return null;
    }

    if (node.nodeName === "FIGURE") {
     const figure = node as HTMLElement;
     const img = figure.querySelector("img");

     return (
      <S.StyledImageContainer key={`${img?.src}-${index}`}>
       {img && <S.StyledImage src={img.src} alt={img.alt || ""} />}
       {img && <S.Tooltip>{img.alt || "Imagem sem descrição"}</S.Tooltip>}
      </S.StyledImageContainer>
     );
    } else if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
     return (
      <S.Project key={`${node.textContent}-${index}`}>
       {node.textContent}
      </S.Project>
     );
    } else if (node.nodeType === Node.ELEMENT_NODE) {
     if (node.nodeName !== "FIGURE") {
      return (
       <S.Project key={`${node.textContent}-${index}`}>
        {node.textContent}
       </S.Project>
      );
     }
    }

    return null;
   })
   .filter((element): element is JSX.Element => element !== null);

  setElements(reactElements);
 }, [text, rendered]);

 return (
  <>
   {contentRender && (
    <S.Paragraph
     proportion={proportion}
     dangerouslySetInnerHTML={{ __html: contentRender }}
    />
   )}
  </>
 );
}

export { Paragraph };
