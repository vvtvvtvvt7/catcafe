import React from 'react';
import Logo from '../logo/logo';
import Button from '../button/button';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
`;

// шапка сайта
function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Button width={260} link={'/pay'}>Купить билет</Button>
    </StyledHeader>
  );
}

export default Header;
