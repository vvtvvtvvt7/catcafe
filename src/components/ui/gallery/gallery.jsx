import React, {useState, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Thumbs } from 'swiper/core';
import styled from 'styled-components';
import Button from '../button/button';
import LeftArrow from '../../icons/LeftArrow';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation,Thumbs]);

const StyledSwiper = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 20px;
`;

const StyledSwiperMini = styled(Swiper)`
  width: 726px;
  height: 128px;
`;
const StyleSlide = styled.img `
  border-radius: 20px;
  width: 726px;
  height: auto;
`;

const StyleSlideMini = styled.div`
  width: 167px;
  height: 128px;
  background-image: url("${(props)=> props.src}");
  position: relative;
  filter: brightness(${(props) => props.active ? 100 : 50 }%);
  background-size: cover;
  border-radius: 12px;
  cursor: pointer;
`;
const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 726px;
  position: relative;
`;

const StyledButtonLeft = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: -94px;
  height: 64px;
  width: 64px;
  border-radius: 50% !important;
  padding: 0;
`;

const StyledButtonRight = styled(StyledButtonLeft)`
  right: -94px;
  left: auto;
`;
const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;


function Gallery({slides}) {
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
          <SwiperSlide key={slide.id}>
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
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                active={activeSlide === index + 1}
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
