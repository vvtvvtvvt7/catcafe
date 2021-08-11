import React from 'react';
import CageGallery from '../cafe-gallery/cafe-gallery';
import Header from '../header/header';
import Footer from '../footer/footer';
import Buy from '../buy/buy';

function BuyPage({slides, buyOptions}) {

  return (
    <>
      <Header />
      <CageGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
      <Footer />
    </>
  );
}

export default BuyPage;
