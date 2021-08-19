import React, {useState, useRef} from 'react';
import 'swiper/swiper.scss';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Thumbs } from 'swiper/core';
import LeftArrow from '../../../assets/images/left-arrow.cmp.svg';

import {
  RightArrow,
  SliderWrapper,
  StyledButtonLeft,
  StyledButtonRight,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini
} from './styles';

SwiperCore.use([Navigation,Thumbs]);

function Gallery({
  slides, // список слайдов каждый слайд это src картинки и alt
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <StyledSwiper
        spaceBetween={20}
        onSlideChange={(slider)=> {
          setActiveSlide(slider.activeIndex);
        }}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        loop
      >{slides.map((slide, index) => (
          <SwiperSlide key={slide.src}>
            <StyleSlide src={slide.src} alt={slide.alt} width={728} height={408} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={4}
          watchSlidesVisibility
          watchSlidesProgress
          loop
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper)=>{
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >

          {slides.map((slide, index) => (
            <SwiperSlide key={slide.src}>
              <StyleSlideMini
                $active={activeSlide === index + 1}
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow/>
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}

export default Gallery;
