import { createGlobalStyle } from "styled-components";

import { themeProps } from "../styles/theme";

const globalStyle = createGlobalStyle<themeProps>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    -webkit-appearance: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.colors.bgColor}
  }

  ::-webkit-scrollbar {
    width: 6px;             
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.bgColor}   
  }

  ::-webkit-scrollbar-thumb {
    width: 4px;
    background-color: ${(props) =>
      props.theme.colors.grayTextColor};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }

  .appContainer {
    height: 100vh;
    width: calc(100vw - 200px);
    margin-left: 200px;
    padding: 40px;
  }

  .flexDiv:first-child {
    margin-bottom: 130px;
  }

  .flexDiv {
    > h1 {
      position: absolute;
      top: -50px;
    }
  
    overflow-x: visible;
    position: relative;
    display: grid;
    grid-template-columns: 1fr .9fr;
    align-items: center;
    justify-items: flex-start;
    gap: 50px;
  }
  
  .boxInfos {
    margin-top: 10px;
  }

  .boxButtons {
    position: absolute;
    bottom: 25px;
    display: flex;
    gap: 10px;
  }

  .form {
    background: ${(props) => props.theme.colors.bgColor};
    padding: 20px;
    border-radius: 15px;
  }

  a {
    font-size: 15px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.titlesColor};
  }
  
  .nothingFound {
    color: ${(props) => props.theme.colors.grayTextColor};
  }

  
  .openMenu, .closeMenu {
    display: none;
    z-index: 1000;
    background: ${(props) => props.theme.colors.btnBg};
    color: ${(props) => props.theme.colors.primaryTextColor};
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    transform: rotate(90deg);
    border: none;
    font-size: 23px;
    cursor: pointer;
    transform: rotate(90deg)
  }

  .openMenu {
    border-radius: 50%;
  
  }

  .closeMenu {
    top: 5px;
    left: 160px;
    background: transparent;
    transform: rotate(0deg);
  }

  .hidden {
    display: none!important;
  }

  @media (max-width: 1000px) {
    .flexDiv {
      grid-template-columns: 1fr;
    } 
  }

  @media (max-width: 1200px) {
    .flexDiv {
      gap: 20px;
    }
  }

  @media (max-width: 640px) {

    .openMenu, .closeMenu {
      display: block;
    }

    .appContainer {
      padding: 10px;
      width: 100vw;
      margin-left: 0;
    }
  }

  .fadeIn {
    animation: .5s FadeIn;
  }

  .fadeIn1 {
    animation: 1s FadeIn;
  }

  .fadeIn2 {
    animation: 1.2s FadeIn;
  }

  @keyframes FadeIn {
  from {
    opacitiy: 0;
    transform: translateX(300px);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

  .login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);

  cursor: pointer;
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }

}
`;

export default globalStyle;
