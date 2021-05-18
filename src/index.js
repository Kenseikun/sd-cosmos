import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { mainTheme } from "./GlobalStyles/theme/mainTheme";

import Root from "./Root/Root";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
