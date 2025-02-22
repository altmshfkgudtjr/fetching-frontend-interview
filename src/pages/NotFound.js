import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// lib
import { transition, noselect } from 'lib/styles/styles';
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

function NoPage() {
  const history = useHistory();

  const onGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Helmet>
        <title>페칭 - 404</title>
      </Helmet>

      <Title>해당 페이지는 출장 중이에요!</Title>
      <Btn onClick={onGoBack}>돌아가기</Btn>
    </>
  );
}

const Title = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40vh;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  color: #444;
  font-weight: 600;
  text-align: center;

  ${media.small} {
    font-size: 1.4rem;
  }
`;

const Btn = styled.button`
  position: relative;
  display: block;
  width: 100px;
  height: 30px;
  font-size: 0.8rem;
  line-height: 26px;
  margin: 15px auto;
  border-radius: 4px;
  border: 1px solid ${palette.gray4};
  text-align: center;
  cursor: pointer;
  transition: 0.2s ${transition};
  ${noselect}

  &:hover,
	&:active {
    background-color: ${palette.gray7};
    color: white;
  }
`;

export default NoPage;
