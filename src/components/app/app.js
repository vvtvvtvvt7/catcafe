import React from 'react';
import MainPage from '../main-page/main-page';
import starList from '../../mocks/starList';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage stars={starList} />
    </>
  );
}

export default App;
