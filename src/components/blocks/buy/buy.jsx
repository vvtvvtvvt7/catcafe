import React, {useState} from 'react';
import From from '../../styled/form/form';
import Label from '../../styled/label/label';
import Button from '../../ui/button/button';
import RadioButton from '../../ui/radio-button/radio-button';
import { Accordion } from '../../ui/accordion/accordion';
import Li from '../../styled/li/li';
import { TitleSize } from '../../ui/title/title';
import {
  StyledSection,
  DurationWrapper,
  AccordionText,
  Price,
  FormItem,
  RadioLabelForTime,
  RadioLabelForType,
  StyleTitle
} from './styles';

// страница покупки
function Buy ({buyOptions}) {
  const [duration, setDuration] = useState(buyOptions.durationOptions[0]);
  const [selectType, setSelectType] = useState(buyOptions.ticketOptions[0].id);
  const type = buyOptions.ticketOptions.find((option) => option.id === selectType);
  const price = duration * (type.price);
  const accordionContent = buyOptions.ticketOptions && buyOptions.ticketOptions
    .map((option) => ({
      title:  (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description,
      id: option.id,
    }));

  const handleBuy = () => {
    // eslint-disable-next-line no-console,no-alert
    alert(
      `Спасибо за покупку.
              Вы приобрели билет класса: ${type.title}.
              Продолжительность посещения(часов): ${duration}.
              Цна билета: ${price} руб.`);
  };

  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>Купить билет</StyleTitle>
      <From $width={540}>
        <FormItem>
          <Label $margin={12}>Продолжительность (часов)</Label>
          <DurationWrapper $isGridList $indent={12} $align="left">
            {buyOptions.durationOptions.length
              && buyOptions.durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
          </DurationWrapper>
        </FormItem>
        <FormItem $bottom={22}>
          <Label $margin={12}>Тип билета</Label>
          <Accordion
            textComponent={AccordionText}
            content={accordionContent}
            isHtml
          />
        </FormItem>
        <Label $small $margin={6}>Цена</Label>
        <Price>{price} руб.</Price>
        <Button
          minWidth={460}
          onClick={handleBuy}
        >Купить билет
        </Button>
      </From>
    </StyledSection>
  );
}

export default Buy;
