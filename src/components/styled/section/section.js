import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  position: relative;
  min-width: 900px;
  max-width: 1500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default Section;
