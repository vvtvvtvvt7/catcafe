import React from 'react';
import styled from 'styled-components';
import Section from '../../styled/section/section';
import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import aboutImage from '../../../assets/images/about.svg';
import mapMark from '../../../assets/images/map-mark.svg';

const StyledSection = styled(Section)`
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  align-items: center;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

const TextWrapper = styled.div`
  max-width: 650px;
`;
const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const Text = styled(Paragraph)`
  margin-top: ${(props)=> props.theme.indent};
  padding-right: 100px;
  margin-bottom: 40px;
`;

const WorkTime = styled(Paragraph)`
  height: 43px;
  width: 292px;
  margin-bottom: ${(props)=> props.theme.indent};
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props)=> props.theme.colorForDarkBackground};
  vertical-align: middle;
`;

const Address = styled(Paragraph)`
  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background-image: url(${mapMark});
  }
`;

// Раздел о котокафе
function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>Первое в России котокафе</Title>
        <Text>Крупнейшее котокафе России, в котором живёт 50 кошек и котов,
                и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.
        </Text>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>Санкт-Петербург, Большая Конюшенная улица, 27</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
