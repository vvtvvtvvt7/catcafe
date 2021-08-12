import React from 'react';
import styled from 'styled-components';
import Logo from '../../ui/logo/logo';
import Section from '../../styled/section/section';

const StyledSection = styled(Section)`
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.span`
  height: 43px;
  width: 148px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  background-color: ${(props) => props.theme.colorForLightBackground};
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;

// подвал сайта
function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>
          Создано 2021
      </Copyright>
    </StyledSection>
  );
}

export default Footer;
