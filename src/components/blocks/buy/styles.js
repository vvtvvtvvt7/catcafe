import styled from 'styled-components';
import Section from '../../styled/section/section';
import buyBackground from '../../../assets/images/buy-background.svg';
import buyBackgroundRight from '../../../assets/images/buy-right-background.svg';
import buyBackgroundRightTop from '../../../assets/images/buy-right-background-top.svg';
import Title from '../../ui/title/title';
import Ul from '../../styled/ul/ul';

export const StyledSection = styled(Section)`
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

export const StyleTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const FormItem = styled.div`
  margin-bottom: ${(props) => `${props.$bottom || 24}px`};
`;

export const RadioLabelForTime = styled.span`
  display: flex;
  height: 44px;
  width: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: color  0.2s ease-out, background-color  0.2s ease-out;
  ${(props) => props.$isChecked ? `
    background-color: ${props.theme.colorForButton};
    color: ${props.theme.colorWhite}
  ` : `
    background-color: ${props.theme.colorGray};
    color: ${props.theme.colorBlackForText};
    cursor: pointer;
  `}
`;

export const RadioLabelForType = styled.span`
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

  ${(props) => props.$isChecked && `
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 8px;
      left: 3px;
      height: 13px;
      width: 13px;
      background-color: ${props.theme.colorForButton};
      border-radius: 50%;
    }
  `}
`;

export const DurationWrapper = styled(Ul)`
`;

export const AccordionText = styled.div`
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

export const Price = styled.span`
  display: block;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 27px;
  font-weight: 700;
`;
