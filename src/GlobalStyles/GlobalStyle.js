import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding: 0;
      box-sizing:border-box;
      color: #fff;
      text-decoration: none;
    }

    body {
      overflow: hidden;

      position: relative;
      color: white;
      height: 100vh;
      font-family: ${({ theme }) => theme.fontFamily.main};
      background: ${({ theme }) => theme.colors.background};
      background-repeat: no-repeat;

    }

    body::before {
      position: absolute;
      top: -150px;
      left: -150px;

      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #00C9B7;

      z-index: -20;

      animation: mymove 5s linear infinite;
    }

    body::after {
      position: absolute;
      top: 150px;
      right: -220px;

      content: "";
      width: 420px;
      height: 420px;
      border-radius: 50%;
      border: 40px solid #272044;

    }

    @keyframes mymove {
     0% {top: 620px;}
     100% {left: 800px}
    }

    button {
      cursor: pointer
    }
`;

export default GlobalStyle;
