import React from 'react';
import Title, { TitleSize, TitleLevel } from '../title/title';
import StarIcon from '../star-icon/star-icon';
import styled from 'styled-components';

const StyledStarCard = styled.article`
  width: 353px;
  height: 525px;
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
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Text = styled.p`
 margin-top: 12px;
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
      <Text className="star__about">{about}</Text>
    </StyledStarCard>
  );
}

export default StarCard;
