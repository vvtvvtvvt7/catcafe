import React from 'react';
import styled from 'styled-components';
import buyBackground from '../../../assets/images/buy-background.svg';
import buyBackgroundRight from '../../../assets/images/buy-right-background.svg';
import buyBackgroundRightTop from '../../../assets/images/buy-right-background-top.svg';

const StyledBuy = styled.section`
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  position: relative;
  background-image: url(${buyBackground});
  background-position: left bottom;
  background-size: 349px 406px;
  background-repeat: no-repeat;
  min-height: 786px;
  &:before {
    position: absolute;
    top: 175px;
    right: 94px;
    width: 443px;
    height: 468px;
    content: "";
    background-image: url(${buyBackgroundRight});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:after {
    position: absolute;
    top: 277px;
    right: 90px;
    width: 447px;
    height: 409px;
    content: "";
    background-image: url(${buyBackgroundRightTop});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

// страница покупки
function Buy({buyOptions}) {

  return (
    <StyledBuy>
      {buyOptions.toString()}
    </StyledBuy>
  );
}

export default Buy;
