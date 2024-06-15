import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    //Запись p0+m0 + TAB
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Fira Code", monospace;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
	    color: ${theme.colors.text};
	    background-color: ${theme.colors.primaryBg};
	    line-height: 1.2;
    }


    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button {
      background-color: unset;
      border: none;
    }

    header {
      background-color: ${theme.colors.primaryBg};
    }

    section {
      background-color: ${theme.colors.primaryBg};
    }

    footer {
      background-color: ${theme.colors.primaryBg};
    }
`
