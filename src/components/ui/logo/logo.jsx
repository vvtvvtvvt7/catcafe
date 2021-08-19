import React from 'react';
import LogoImage from '../../../assets/images/logo.cmp.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../../const';

const StyledLogo = styled(Link)`
  display: flex;
  height: 44px;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Text = styled.span`
  display: flex;
  height: 44px;
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: ${(props) => props.theme.colorBlackForText};
`;

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
