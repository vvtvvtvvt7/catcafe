import React, {forwardRef} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => `${props.$minWidth}px` || '100%'};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
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
  transition: background-color  0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

function buttonForRef({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  minWidth, // ширина кнопки
  className, // класс
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}, ref) {
  return (
    <StyledButton
      {...props}
      $minWidth={minWidth}
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
