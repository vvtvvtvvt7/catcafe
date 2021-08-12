import React, {forwardRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: block;
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
  background-image: none;
  box-shadow: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }
`;

function buttonForRef({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  width, // ширина кнопки
  className, // класс
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}, ref) {
  return (
    <StyledButton
      {...props}
      width={width}
      ref={ref}
      {...(link ? {to: link} : {as: 'button', onClick, type: 'button'})}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

// Компонент кнопки,
const ButtonRef = forwardRef(buttonForRef);

export default ButtonRef;
