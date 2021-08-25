import React, {forwardRef} from 'react';
import { StyledButton } from './styles';

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
