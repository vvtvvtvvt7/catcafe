import React from 'react';
import Header from '../header/header';
import About from '../about/about';
import StarsList from '../stars-list/stars-list';
import Footer from '../footer/footer';
import { TitleLevel } from '../title/title';

// Главная страница сайта
function MainPage({
  stars, // список лучших котов, отображаемых на главной странице
}) {
  return (
    <>
      <Header />
      <About />
      <StarsList stars={stars} level={TitleLevel.H2} />
      <Footer />
    </>
  );
}

export default MainPage;
