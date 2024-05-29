import React from "react";
import { Main, Navbar, NavItem } from "./styled";
import { useNavigate } from "react-router-dom";

function Navigation() {
 const navigate = useNavigate();

 function handleClick(route: string) {
  if (route === "home") {
   return navigate("/home");
  }
  if (route === "projects") {
   return navigate("/projects");
  }
 }

 return (
  <Main>
   <Navbar>
    <NavItem
     role="button"
     tabIndex={0}
     onClick={() => handleClick("home")}
     onKeyDown={() => handleClick("home")}>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(253,44,103)"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
     </svg>
    </NavItem>

    <NavItem
     role="button"
     tabIndex={0}
     onClick={() => handleClick("projects")}
     onKeyDown={() => handleClick("projects")}>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(220,255,115)"
      viewBox="0 0 24 24">
      <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
     </svg>
    </NavItem>

    <NavItem>
     <a
      target="_blank"
      href="https://www.linkedin.com/in/quirinojess/"
      rel="noreferrer">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="rgb(100,100,100)">
       <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
      </svg>
     </a>
    </NavItem>

    <NavItem>
     <a target="_blank" href="https://github.com/quirinojess/" rel="noreferrer">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="rgb(100,100,100)">
       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
     </a>
    </NavItem>
   </Navbar>
  </Main>
 );
}
export default Navigation;
