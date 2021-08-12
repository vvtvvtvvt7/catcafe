import React, {useState} from 'react';
import styled from 'styled-components';
import Section from '../../styled/section/section';
import From from '../../styled/form/form';
import Label from '../../styled/label/label';
import buyBackground from '../../../assets/images/buy-background.svg';
import buyBackgroundRight from '../../../assets/images/buy-right-background.svg';
import buyBackgroundRightTop from '../../../assets/images/buy-right-background-top.svg';
import Title, { TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import RadioButton from '../../ui/radio-button/radio-button';
import { Accordion } from '../../ui/accordion/accordion';
import Ul from '../../styled/ul/ul';
import Li from '../../styled/li/li';

const StyledSection = styled(Section)`
  display: block;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  background-image: url(${buyBackground});
  background-position: left bottom;
  background-size: 349px 406px;
  background-repeat: no-repeat;
  min-height: 786px;

  &::before {
    position: absolute;
    top: 175px;
    right: 94px;
    width: 443px;
    height: 468px;
    content: "";
    background-image: url(${buyBackgroundRight});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    top: 277px;
    right: 90px;
    width: 447px;
    height: 409px;
    content: "";
    background-image: url(${buyBackgroundRightTop});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const StyleTitle = styled(Title)`
  margin-bottom: 24px;
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const RadioLabelForTime = styled.span`
  display: flex;
  height: 44px;
  width: 44px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${(props) => props.isChecked ? `
    background-color: ${props.theme.colorForButton};
    color: ${props.theme.colorWhite}
  ` : `
    background-color: ${props.theme.colorGray};
    color: ${props.theme.colorBlackForText};
    cursor: pointer;
  `}
`;

const RadioLabelForType = styled.span`
  position: relative;
  align-items: center;
  padding-left: 26px;
  box-sizing: border-box;
  height: 18px;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    left: 0;
    height: 17px;
    width: 17px;
    border: 1px solid ${(props) => props.theme.colorForButton};
    border-radius: 50%;
  }

  ${(props) => props.isChecked && `
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 8px;
      left: 3px;
      height: 12px;
      width: 12px;
      background-color: ${props.theme.colorForButton};
      border-radius: 50%;
    }
  `}
`;

const DurationWrapper = styled(Ul)`
  display: flex;
`;

const AccordionText = styled.div`
  font-size: 14px;
  line-height: 21px;

  & ul {
    margin: 0;
    padding: 0;
    margin-left: 15px;
  }

  & li {
    list-style-type: disc;
  }
`;

const Price = styled.span`
  display: block;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 27px;
  font-weight: 700;
`;

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
      <From width={540}>
        <FormItem>
          <Label margin={12}>Продолжительность (часов)</Label>
          <DurationWrapper>
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
        <FormItem>
          <Label margin={12}>Тип билета</Label>
          <Accordion
            textComponent={AccordionText}
            content={accordionContent}
            isHtmlText
          />
        </FormItem>
        <Label small margin={8}>Цена</Label>
        <Price>{price} руб.</Price>
        <Button
          width={460}
          onClick={handleBuy}
        >Купить билет
        </Button>
      </From>
    </StyledSection>
  );
}

export default Buy;
