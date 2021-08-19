import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import starList from '../../mocks/starList';
import gallery from '../../mocks/gallery';
import buyOptions from '../../mocks/buyOptions';
import BuyPage from '../pages/buy-page/buy-page';
import { AppRoute } from '../../const';
import ScrollTop from '../ui/scroll-top/scroll-top';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';


// Корневой компонент всего приложения
function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage stars={starList} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.BUY}>
            <PageWrapper
              pageUrl={AppRoute.BUY}
            >
              <BuyPage slides={gallery} buyOptions={buyOptions} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
