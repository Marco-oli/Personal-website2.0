import { createGlobalStyle } from 'styled-components';
import colors from './assets/colors';

const GlobalStyle = createGlobalStyle `
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      scroll-behavior: smooth;
   }

   body {
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      line-height: 1.75;
      letter-spacing: 1px;
      color: #fff;
      text-align: center; 
      color: ${colors.text};
   }
`;

export default GlobalStyle;