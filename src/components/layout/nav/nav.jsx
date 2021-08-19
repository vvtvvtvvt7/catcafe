import React from 'react';
import Button from '../../ui/button/button';
import styled from 'styled-components';
import { AppRoute } from '../../../const';

const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: ${(props)=> props.theme.colorWhite};
  color: ${(props)=> props.theme.colorBlackForText};
  font-size: 18px;

  &:hover,
  &:active {
    background-color: ${(props)=> props.theme.colorWhite};
    text-decoration: underline;
  }
  &:hover {
    box-shadow: none;
  }
`;
const buttons = [
  {to: AppRoute.MAIN, button: (<StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>Главная</StyledButton>)},
  {to: AppRoute.BUY, button: (<Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>Купить билет</Button>)},
];

// навигация
function Nav({
  pageUrl,
}) {
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button )}
    </nav>
  );
}

export default Nav;
