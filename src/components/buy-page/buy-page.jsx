import React from 'react';
import CageGallery from '../cafe-gallery/cafe-gallery';
import Header from '../header/header';
import Footer from '../footer/footer';
import Buy from '../buy/buy';
import styled from 'styled-components';
import {AppRoute} from '../../const';
import Button from '../button/button';

const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  display: inline-block;
  background-color: ${(props)=> props.theme.colorWhite};
  color: ${(props)=> props.theme.colorBlackForText};
  font-size: 18px;
  &:hover,
  &:active {
    background-color: ${(props)=> props.theme.colorWhite};
    text-decoration: underline;
  }
`;

function BuyPage({slides, buyOptions}) {

  return (
    <>
      <Header>
        <StyledButton width={260} link={AppRoute.MAIN}>Главная</StyledButton>
      </Header>
      <CageGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
      <Footer />
    </>
  );
}

export default BuyPage;
