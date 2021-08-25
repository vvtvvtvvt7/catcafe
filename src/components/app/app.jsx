import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from 'src/components/pages/main-page/main-page';
import starList from 'src/mocks/starList';
import gallery from 'src/mocks/gallery';
import buyOptions from 'src/mocks/buyOptions';
import BuyPage from 'src/components/pages/buy-page/buy-page';
import { AppRoute } from 'src/const';
import ScrollTop from 'src/components/ui/scroll-top/scroll-top';
import PageWrapper from 'src/components/layout/page-wrapper/page-wrapper';
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
