import React from 'react';
import LogoImage from '../icons/Logo';
import styled from 'styled-components';

const StyledLogo = styled.a`
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
    <StyledLogo href="/">
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
