import './App.css';
import '../src/assets/css/fonts.css'
import Router from './routes/router';
import { createGlobalStyle } from 'styled-components';
 

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Atkinson Hyperlegible', sans-serif;
    
    
  }
`;






function App() {
  return ( <>
  <GlobalStyle/>
    <Router/>
  
    </>
  );
}

export default App;
