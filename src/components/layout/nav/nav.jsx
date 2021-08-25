import React from 'react';
import Button from 'src/components/ui/button/button';
import { AppRoute } from 'src/const';
import { StyledButton } from './styles';

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
