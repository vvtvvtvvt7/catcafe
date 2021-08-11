import React from 'react';
import Header from '../../layout/header/header';
import About from '../../blocks/about/about';
import StarsList from '../../blocks/stars-list/stars-list';
import Footer from '../../layout/footer/footer';
import { TitleLevel } from '../../ui/title/title';
import {AppRoute} from '../../../const';
import Button from '../../ui/button/button';

// Главная страница сайта
function MainPage({
  stars, // список лучших котов, отображаемых на главной странице
}) {
  return (
    <>
      <Header>
        <Button width={260} link={AppRoute.BUY}>Купить билет</Button>
      </Header>
      <About />
      <StarsList stars={stars} level={TitleLevel.H2} />
      <Footer />
    </>
  );
}

export default MainPage;
