import React from 'react';
import CageGallery from 'src/components/blocks/cafe-gallery/cafe-gallery';
import Buy from 'src/components/blocks/buy/buy';

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
