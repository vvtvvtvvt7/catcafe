import React from 'react';
import styled from 'styled-components';
import Title, { TitleSize } from '../title/title';
import Gallery from '../gallery/gallery';
import galleryLeft from '../../assets/images/gallery-left.svg';
import galleryRight from '../../assets/images/gallery-right.svg';
import galleryBackground from '../../assets/images/gallery-background.svg';

const StyledCafeGallery = styled.section`
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  // display: flex;
  position: relative;
  background-image: url(${galleryBackground});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;
  &:before {
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

  &:after {
    position: absolute;
    top: 0;
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

// страница покупки
function CafeGallery({slides}) {

  return (
    <StyledCafeGallery>
      <StyledTitle level={2} size={TitleSize.BIG}>Галерея нашего кафе</StyledTitle>
      <Gallery slides={slides} />
    </StyledCafeGallery>
  );
}

export default CafeGallery;
