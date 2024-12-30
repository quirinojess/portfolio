import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, ThemeDark } from "./themes";
import RoutesConfig from "./routes";
import { Footer, Header, MouseShadow, ErrorBoundary } from "components";
import { ScrollContextProvider, ProjectContextProvider } from "context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 return (
  <ThemeProvider theme={ThemeDark}>
   <ScrollContextProvider>
    <ProjectContextProvider>
     <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <GlobalStyle />
      <ToastContainer />
      <Header />
      <MouseShadow />
      <ErrorBoundary>
       <RoutesConfig />
      </ErrorBoundary>
      <Footer />
     </BrowserRouter>
    </ProjectContextProvider>
   </ScrollContextProvider>
  </ThemeProvider>
 );
}

export default App;
