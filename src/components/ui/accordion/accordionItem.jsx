import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import LeftArrow from '../../icons/LeftArrow';

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colorBlackForText};
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  height: ${(props) => `${props.open ? props.height : 1}px`};
  padding-top: 10px;
  margin-top: -11px;
  overflow: hidden;
  background-color: ${(props)=> props.theme.colorGray};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: height 0.3s ease-out;
`;

const Arrow = styled(LeftArrow)`
  transform: rotate(${(props)=> props.open ? '90deg' : '-90deg'}) scale(0.7);
  transition: transform 0.3s ease-out;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: ${(props)=> props.theme.colorGray};
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  z-index: 2;
`;

// элемент аккордеона
function AccordionItem({
  titleComponent, // компонент который нужно использовать для отрисовки заголовка
  title, // содержимое заголовка
  text, // содержимое текста
  open, // открыт ли элемент
  textComponent, // компонент который нужно использовать для отрисовки текста
  onClick, // клик по кнопке раскрытия аккордеона
  isHtml, // является ли текст html разметкой
}) {
  const [height, setHeight] = useState(0);
  const TitleComponent = titleComponent;
  const TextComponent = textComponent || 'div';
  const contentWrapper = useRef(null);

  useEffect(() => {
    setHeight(contentWrapper.current.offsetHeight);
  }, [text]);

  return (
    <>
      <TitleWrapper open={open}>
        { TitleComponent ? <TitleComponent>{title}</TitleComponent> : title }
        <Button
          type="button"
          onClick={onClick}
          title={`${open ? 'Скрыть': 'Раскрыть'} описание ${title}`}
        >
          <Arrow open={open} />
        </Button>
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapper}> {
          isHtml
            ? <TextComponent dangerouslySetInnerHTML={{__html: text}} />
            : <TextComponent>{text}</TextComponent>
        }
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default AccordionItem;
