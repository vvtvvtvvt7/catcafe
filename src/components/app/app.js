import React from 'react';
import MainPage from '../main-page/main-page';
import starList from '../../mocks/starList';
import gallery from '../../mocks/gallery';
import buyOptions from '../../mocks/buyOptions';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import BuyPage from '../buy-page/buy-page';
import { createGlobalStyle } from 'styled-components';
import { AppRoute } from '../../const';

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
