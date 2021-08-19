import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styled from 'styled-components';

const Main = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: ${(props) => props.theme.footerHeight};
`;

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
