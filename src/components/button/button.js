import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  width: ${(props) => `${props.width}px` || '100%'};
  font-weight: 700;
  line-height: 60px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  outline: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }
`;

// Компонент кнопки, может превращаться в ссылку,
// если передать link
function Button({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  width, // ширина кнопки
}) {
  return (
    <StyledButton
      width={width}
      {...(link ? {as: 'a', href: link} : {})}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
