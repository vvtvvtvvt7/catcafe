import React from 'react';
import styled from 'styled-components';

export const TitleSize = {
  BIG: 'big',
  SMALL: 'small',
  DEFAULT: '',
};

export const TitleLevel = {
  H1: '1',
  H2: '2',
  H3: '3',
  H4: '4',
  H5: '5',
  H6: '6',
};

const StyledTitle = styled.h1 `
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.$size === TitleSize.BIG) {
      fontSize = '44px';
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = '28px';
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineРeight = '41px';
    if (props.size === TitleSize.BIG) {
      lineРeight = '50px';
    }
    if (props.size === TitleSize.SMALL) {
      lineРeight = '32px';
    }
    return lineРeight;
  }};
`;

// Заголовок
function Title({
  level, // уровень h1, h2 и т.д. TitleLevel
  size, // размер заголовка TitleSize
  children, // дочерний элемент который будет отображён в заголовке
  className,
}) {

  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );

}

export default Title;
