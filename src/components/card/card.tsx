import { Main, Cards, Title, Description, Tecnology, See } from "./styled";

function Card() {
 return (
  <div>
   <Main>
    <Cards>
     <Title>Go to Space</Title>
     <Description>Portal for scheduling space travel</Description>
     <Tecnology>React.js</Tecnology>
     <See>
      <a
       target="_blank"
       href="https://quirinojess.github.io/labex/"
       rel="noreferrer">
       ► see the project
      </a>
     </See>
    </Cards>

    <Cards>
     <Title>Portfolio</Title>
     <Description>Designer portfolio with blog integration</Description>
     <Tecnology>PHP, Wordpress, MYSQL</Tecnology>
     <See>
      <a target="_blank" href="https://qrno.com.br" rel="noreferrer">
       ► see the project
      </a>
     </See>
    </Cards>
   </Main>
  </div>
 );
}

export default Card;
