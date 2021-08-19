import React from 'react';
import styled from 'styled-components';
import { CatFeature } from '../../../const';

const StyledStarIcon = styled.span`
  display: block;
  height: 43px;
  padding: 8px 16px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
  background-color: ${(props) => props.$bgColor};
  border-radius: 8px 8px 8px 0;
  text-transform: uppercase;
`;

function StarIcon({className = '', feature}) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: 'New',
        bgColor: '#ffb334',
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: 'Ласковый',
        bgColor: '#7fc92e',
      };
      break;
    default:
      options = {
        text: '',
        bgColor: '#000',
      };
      break;
  }

  return (options.text
    ? <StyledStarIcon className={className} $bgColor={options.bgColor}>{options.text}</StyledStarIcon>
    : null);
}

export default StarIcon;
