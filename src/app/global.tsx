import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

html, body, #root {
  position: relative;
  margin: 0px;
  height: 100%;
  justify-content: center;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: #8f8f8f;
  letter-spacing: 0.1px;
  }

  a {
    text-decoration: none;
  }
`;
