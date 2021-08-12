import React from 'react';
import styled from 'styled-components';
import CageGallery from '../../blocks/cafe-gallery/cafe-gallery';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import Buy from '../../blocks/buy/buy';
import {AppRoute} from '../../../const';
import Button from '../../ui/button/button';

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

// страница покупки билетов
function BuyPage({
  slides, // список слайдов для галереи
  buyOptions, // опции покупки билетов
}) {

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
