import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import starList from '../../mocks/starList';
import gallery from '../../mocks/gallery';
import buyOptions from '../../mocks/buyOptions';
import BuyPage from '../pages/buy-page/buy-page';
import { AppRoute } from '../../const';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2") format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2") format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2") format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2") format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

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
      <Router>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <MainPage stars={starList} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={AppRoute.BUY}>
            <BuyPage slides={gallery} buyOptions={buyOptions} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
