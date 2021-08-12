import React from 'react';
import styled from 'styled-components';
import Section from '../../styled/section/section';
import Title, { TitleSize } from '../../ui/title/title';
import Gallery from '../../ui/gallery/gallery';
import galleryLeft from '../../../assets/images/gallery-left.svg';
import galleryRight from '../../../assets/images/gallery-right.svg';
import galleryBackground from '../../../assets/images/gallery-background.svg';

const StyledSection = styled(Section)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryBackground});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 113px;
    height: 114px;
    content: "";
    background-image: url(${galleryLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background-image: url(${galleryRight});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;

// Галерея котокафэ
function CafeGallery({
  slides, // массив фотографий каждый элемент содержит поле src и alt
}) {

  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>Галерея нашего кафе</StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  );
}

export default CafeGallery;
