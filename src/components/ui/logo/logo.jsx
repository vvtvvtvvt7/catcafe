import React from 'react';
import LogoImage from 'src/assets/images/logo.cmp.svg';
import { AppRoute } from 'src/const';
import { Text, StyledLogo } from './styles';

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
