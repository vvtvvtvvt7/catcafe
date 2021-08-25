import React from 'react';
import Header from 'src/components/layout/header/header';
import Footer from 'src/components/layout/footer/footer';
import { Main } from './styles';

// Обёртка для контента страниц
function PageWrapper({
  pageUrl, // навигация для шапки
  children, // навигация
}) {
  return (
    <>
      <Header
        pageUrl={pageUrl}
      />
      <Main>
        {children}
      </Main>
      <Footer/>
    </>
  );
}

export default PageWrapper;
