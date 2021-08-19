import React from 'react';
import styled from 'styled-components';
import Section from '../../styled/section/section';
import Button from '../../ui/button/button';
import Ul from '../../styled/ul/ul';
import Li from '../../styled/li/li';
import Title from '../../ui/title/title';
import StarCard from '../../ui/star-card/star-card';
import starsImage from '../../../assets/images/stars-image.svg';
import startLeft from '../../../assets/images/stars-left.svg';
import startRight from '../../../assets/images/stars-right.svg';
import { AppRoute } from '../../../const';

const StyledStarsList = styled(Section)`
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

  &::before {
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

  &::after {
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

const StarList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

const StarItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;

// список известных котов
function StarsList({
  stars, // коты
  level, // уровень заголовка списка.
}) {
  return (
    <StyledStarsList>
      <Title level={level} >Наши звёзды</Title>
      <StarList $isGridList>
        {stars.map((star) => (
          <StarItem key={star.id}>
            <StarCard {...star} />
          </StarItem>),
        )}
      </StarList>
      <Button minWidth={353} link={AppRoute.BUY}>Купить билет</Button>
    </StyledStarsList>
  );
}

export default StarsList;
