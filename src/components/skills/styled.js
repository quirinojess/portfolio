import styled from "styled-components";
import { keyframes } from "styled-components";

export const Align = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`;

export const Skill = styled.div`
 width: 45%;
 height: 40px;
 background: #666666;
 color: white;
 margin: 3vh 0 3vh 0;
 padding: 5px 0;
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
 @media (max-width: 768px) {
  width: 90%;
 }
`;

export const SkillTxt = styled.div`
 width: 17%;
 height: 40px;
 text-align: center;
 background: black;
 font-size: 14px;
 display: flex;
 align-items: center;
 padding: 5px;
 @media (max-width: 768px) {
  width: 27%;
  font-size: 13px;
 }
`;

const growR = keyframes`
0% {
width:0px;
opacity:0;
}

100% {
width: 40%;
opacity: 1; 
}
`;

const growH = keyframes`
0% {
width:0px;
opacity:0;
}

100% {
width: 84%;
opacity: 1; 

}

`;

const growD = keyframes`
0% {
width:0px;
opacity:0;
}

100% {
width: 75%;
opacity: 1; 
}
`;

const growP = keyframes`
0% {
width:0px;
opacity:0;
}

100% {
width: 45%;
opacity: 1; 
}
`;

export const SkillanimateR = styled.div`
 animation: ${growR} 1.8s ease-in 0.2s 1 forwards;
 background: #fd2c67;
 padding: 5px 0;
 height: 40px;
 width: auto;
`;

export const SkillanimateH = styled.div`
 animation: ${growH} 1.8s ease-in 0.2s 1 forwards;
 background: rgb(220, 255, 115);
 padding: 5px 0;
 height: 40px;
 width: auto;
`;
export const SkillanimateP = styled.div`
 animation: ${growP} 1.8s ease-in 0.2s 1 forwards;
 background: rgb(220, 255, 115);
 padding: 5px 0;
 height: 40px;
 width: auto;
`;

export const SkillanimateD = styled.div`
 animation: ${growD} 1.8s ease-in 0.2s 1 forwards;
 background: #fd2c67;
 padding: 5px 0;
 height: 40px;
 width: 80%;
`;
