import styled from 'styled-components';

const Label = styled.label`
  ${(props) => props.small
    ? `
    font-size: 14px;
  `
    : `
    font-weight: 700;
    display: block;
  `}

  margin-bottom: ${(props) => props.margin || 0}px;
`;

export default Label;
