import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
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
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    /* scroll-behavior: smooth; */
    font-size: 20px;
    ${(props) => props.theme.window.mobile} {
      font-size: 15px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6, th {
    font-family: 'SCoreDream';
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
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    color: #393939;
  }
  body {
    width: 100%;
    user-select: none;
    -webkit-overflow-scrolling: none;
    
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
    background: none;
    cursor: pointer;
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

  /* List page */
  &.list-style-disc {
    margin: 0 2%;
    > li {
      position: relative;
      font-size: 1rem;
      margin-bottom: 3%;
      > span {
          display: block;
          font-size: 0.75rem;
      }
      ::before {
        content: '';
        display: block;
        width: 4px;
        height : 4px;
        border-radius: 50%;
        background-color: #393939;
        position: absolute;
        top: 14px;
        left: -1%;
      }
      :last-child {
        margin-bottom: 0;
      }
      > ol {
        > li {
          margin: 10px 0;
        }
      }
    }
  }

  &.arrow-box {
    display: flex;
    
    > ul {
        margin: 20px 134px 0 0;
        border-radius: 20px;
        background-color: #EBEBEB;
        height: 150px;
        padding: 2%;
        position: relative;
        flex: 1;
        :last-child {
          margin-right: 0;
        }
        > li {
          font-weight: 400;
          font-family: 'Noto Sans KR', sans-serif;
          ::before {
            left: -5%;
          }
        }
        &.right-85 {
          ::after {
            right: -85px;
          }
        }
        ::after {
          content: '→';
          display: block;
          font-size: 1rem;
          width: 1.5rem;
          color: #393939;
          position: absolute;
          top: calc(50% - 15px);
          right: -45px;
        }
       
        :last-child::after {
          content: none;
        }
        :last-child {
          margin-right: 0;
        } 
      }
    }
    &.arrow-box.flex-grow-1 {
      > ul {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-right: 50px;
        :last-child {
          margin-right: 0;
        }

      }
    }

  ${(props) => props.theme.window.mobile} {
    &.list-style-disc {
      margin-left: 10px;
      > li {
        font-size: 0.8666666666666667rem;
        margin-bottom: 15px;
        ::before {
          top: 8px;
          left: -10px;
        }
        > span {
          font-size: 0.6666666666666667rem;
        }
        > ol {
          > li {
            margin: 5px 0;
          }
        }
      }
    }

    &.arrow-box {
      flex-direction: column;
    > ul {
        padding: 6% 0 9% 14%;
        margin: 0 0 40px 0;
        border-radius: 15px;
        height: 85px;
        width: auto;
        min-width: none;
        :first-child {
          margin-top: 15px;
        }
        
        > li {
          ::before {
            left: -5%;
          }
        }
        &.right-85 {
          ::after {
            top: 118%;
            right: calc(50% - 10px);
          }
        }
        ::after {
          transform: rotate(90deg);
          top: 45px;
          right: calc(50% - 15px);
          width: 1.4rem;
          height: 1rem;
        }
      }
    }
    &.arrow-box.flex-grow-1 {
      > ul {
        height: 30px;
        flex: none;
        margin-right: 0;
        padding: 0;
        :last-child {
          margin-bottom: 26px;
        }
      }
    }
  }
  &.caution {
    color: #C91717;
    font-size: 0.7rem;
    ${(props) => props.theme.window.mobile} {
      font-size: 0.6666666666666667rem;
    }
  }
`;

export default GlobalStyle;
