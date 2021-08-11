import React from 'react';
import Logo from '../../ui/logo/logo';
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
function Header({children}) {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        {children}
      </nav>
    </StyledHeader>
  );
}

export default Header;
