import React from 'react';
import styled from 'styled-components';
import Logo from '../../ui/logo/logo';
import Section from '../../styled/section/section';

const StyledSection = styled(Section)`
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
`;

// шапка сайта
function Header({
  children, // навигация
  isMainPage, // находимся ли на главной странице
}) {
  return (
    <StyledSection as="header">
      <Logo isMainPage={isMainPage} />
      <nav>
        {children}
      </nav>
    </StyledSection>
  );
}

export default Header;
