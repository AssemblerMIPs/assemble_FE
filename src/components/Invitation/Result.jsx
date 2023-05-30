import { IcResultCheck } from '../../assets/icons';
import React from 'react';
import TwoButton from '../common/TwoButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const userName = localStorage.getItem('userName');
  const params = new URLSearchParams(location.search);
  const isAttend = params.get('isAttend') === 'true';

  const navigate = useNavigate();

  return (
    <StResultWrapper>
      <h1>
        {userName}님
        <br />
        {isAttend ? '반가워요 :)' : '다음에 만나요 :)'}
      </h1>
      <StResult>
        <IcResultCheck />
        <p>
          약속을
          {isAttend ? ' 수락' : ' 거절'}
          했습니다
        </p>
      </StResult>

      <StBtnWrapper>
        <TwoButton
          leftBtn='투표 결과'
          rightBtn='홈으로 가기'
          handleClickRight={() => {
            navigate('/home');
          }}
        />
      </StBtnWrapper>
    </StResultWrapper>
  );
};

export default Result;

const StResultWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 2.4rem 2rem;

  & > h1 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
  }
`;

const StBtnWrapper = styled.div`
  position: fixed;
  bottom: 4.1rem;
`;

const StResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.1rem;

  margin-top: 14.7rem;

  & > p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
  }
`;
