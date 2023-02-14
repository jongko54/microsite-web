import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Black.otf') format('otf');
    font-weight: 800;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Bold.otf') format('otf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Medium.otf') format('otf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Regular.otf') format('otf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Light.otf') format('otf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/fonts/NotoSansKR-Thin.otf') format('otf');
    font-weight: 200;
  }

  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream9.otf') format('otf');
    font-weight: 900;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream8.otf') format('otf');
    font-weight: 800;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream7.otf') format('otf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream6.otf') format('otf');
    font-weight: 600;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream5.otf') format('otf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream4.otf') format('otf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream3.otf') format('otf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream2.otf') format('otf');
    font-weight: 200;
  }
  @font-face {
    font-family: 'S-Core Dream';
    src: url('./assets/fonts/SCDream1.otf') format('otf');
    font-weight: 100;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    vertical-align: baseline;
    -webkit-tap-highlight-color: transparent; 
    outline: none; 
    -ms-touch-action: manipulation; 
    touch-action: manipulation; 
    box-sizing: border-box;
  }

  *:focus { 
    -webkit-tap-highlight-color: transparent; 
    outline: none; 
    -ms-touch-action: manipulation; 
    touch-action: manipulation; 
  }
  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6, th {
    font-family: 'S-Core Dream';
    font-weight: 600;
    color: #2F2F2F;
  }
  html, body, div, span, applet, object, iframe,
  p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    color: #393939;
  }
  body {
    width: 100%;
    overflow-X: hidden;
    user-select: none;
    -webkit-overflow-scrolling: none;
    /* margin: 0 auto;
    padding: 0; */
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, img {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
  }
  button:focus {
    outline: none !important;
  }
  input {
    border: none;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    :disabled {
      background-color: #f2f2f2;
      color: #777;
    }
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
