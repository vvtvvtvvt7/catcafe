import React from 'react';
import CageGallery from '../../blocks/cafe-gallery/cafe-gallery';
import Buy from '../../blocks/buy/buy';

// страница покупки билетов
function BuyPage({
  slides, // список слайдов для галереи
  buyOptions, // опции покупки билетов
}) {

  return (
    <>
      <CageGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;
