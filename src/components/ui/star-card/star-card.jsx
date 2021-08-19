import React from 'react';
import styled from 'styled-components';
import Title, { TitleSize, TitleLevel } from '../title/title';
import StarIcon from '../star-icon/star-icon';

const StyledStarCard = styled.article`
  width: 353px;
  min-height: 525px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
`;

const StyledStarIcon = styled(StarIcon)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 313px;
  object-fit: contain;
  border-radius: 8px;
`;
const Text = styled.p`
  margin-top: 7px;
  margin-bottom: 0px;
`;

// Карточка кота
function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image, // url c фото кота
}) {
  return (
    <StyledStarCard>
      <Figure>
        <Image src={image} width={313} height={320} alt="изображение кота" />
        <StyledStarIcon feature={feature} />
      </Figure>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>{name}</Title>
      <Text className="star__about" dangerouslySetInnerHTML={{__html: about}} />
    </StyledStarCard>
  );
}

export default StarCard;
