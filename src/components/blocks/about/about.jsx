import React from 'react';
import Title, { TitleLevel, TitleSize } from 'src/components/ui/title/title';
import {
  Address,
  Text,
  StyledSection,
  WorkTime,
  TextWrapper
} from './styles';

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
        <Address>Санкт-Петербург, набережная реки Карповки, дом 5, литера П</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
