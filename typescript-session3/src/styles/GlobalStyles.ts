import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
        padding: 0;
        margin: 0;
        font-family: 'IBM Plex Mono', monospace;
    };
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea {
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }


`;

export default GlobalStyle;
