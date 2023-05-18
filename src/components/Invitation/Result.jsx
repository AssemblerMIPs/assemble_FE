import { IcResultCheck } from '../../assets/icons';
import React from 'react';
import TwoButton from '../common/TwoButton';
import styled from 'styled-components';

const Result = () => {
  return (
    <StResultWrapper>
      <h1>
        현지님
        <br />
        반가워요 :)
      </h1>
      <StResult>
        <IcResultCheck />
        <p>약속을 수락했습니다</p>
      </StResult>

      <StBtnWrapper>
        <TwoButton leftBtn='투표 결과' rightBtn='홈으로 가기' />
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
