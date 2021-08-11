import React from 'react';
import Button from '../button/button';
import Title from '../title/title';
import StarCard from '../star-card/star-card';
import styled from 'styled-components';
import starsImage from '../../assets/images/stars-image.svg';
import startLeft from '../../assets/images/stars-left.svg';
import startRight from '../../assets/images/stars-right.svg';
import { AppRoute } from '../../const';

const StyledStarsList = styled.section`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${starsImage});
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &:before {
    position: absolute;
    top: 36px;
    left: 0;
    width: 213px;
    height: 170px;
    content: "";
    background-image: url(${startLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 111px;
  height: 158px;
  content: "";
  background-image: url(${startRight});
  background-size: contain;
  background-repeat: no-repeat;
}
`;

const StarList = styled.ul`
  margin-top: 44px;
  margin-bottom: 44px;
  padding: 0;
  text-align: center;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
`;

const StarItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-left: ${(props) => props.theme.indent};
  margin-top: ${(props) => props.theme.indent};
  text-align: left;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  overflow: hidden;
`;

// список известных в котокафе котов
function StarsList({
  stars, // коты
  level, // уровень заголовка списка.
}) {
  return (
    <StyledStarsList>
      <Title level={level} >Наши звёзды</Title>
      <StarList>
        {stars.map((star) => (
          <StarItem key={star.id}>
            <StarCard {...star} />
          </StarItem>),
        )}
      </StarList>
      <Button width={353} link={AppRoute.BUY}>Купить билет</Button>
    </StyledStarsList>
  );
}

export default StarsList;
