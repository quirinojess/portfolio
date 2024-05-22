import {
 Align,
 Skill,
 SkillanimateR,
 SkillanimateH,
 SkillanimateP,
 SkillanimateD,
 SkillTxt,
} from "./styled";

function Skills() {
 return (
  <>
   <Align>
    <Skill>
     <SkillTxt>Js, React, Vue.js</SkillTxt>
     <SkillanimateR> </SkillanimateR>{" "}
    </Skill>

    <Skill>
     <SkillTxt>HTML, CSS</SkillTxt>
     <SkillanimateH> </SkillanimateH>
    </Skill>

    <Skill>
     <SkillTxt>PHP, Wordpress</SkillTxt> <SkillanimateP> </SkillanimateP>
    </Skill>

    <Skill>
     <SkillTxt>Design, UI, UX</SkillTxt>
     <SkillanimateD> </SkillanimateD>
    </Skill>
   </Align>
  </>
 );
}
export default Skills;
