import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const CategoryBtnWrapper = styled.ul`
  display: flex;
  align-items: center;

  ${media.small} {
    display: none;
  }
`;

export default CategoryBtnWrapper;
