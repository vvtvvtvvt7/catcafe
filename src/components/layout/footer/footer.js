import React from 'react';
import Logo from '../../ui/logo/logo';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  height: 80px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  align-items: center;
`;

const Copyright = styled.span`
  height: 43px;
  width: 148px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 43px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
`;

// подвал сайта
function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>
          Создано 2021
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
