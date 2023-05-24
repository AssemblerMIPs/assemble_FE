import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import React from 'react';
import styled from 'styled-components';

const ResponseResult = () => {
  return (
    <StVoteResultWrapper>
      <Header headerName='투표 결과' isCloseBtn />
      <AppointmentName name='담주에 돼지파티 할사람' />

      <StResponseInfo>
        <p>전체 6명</p>
        <div>
          <p>수락 (3)</p>
          <p> | </p>
          <p>거절 (3)</p>
        </div>
      </StResponseInfo>

      <StResultWrapper>
        <StResult>
          <div>
            효승
            <span>수락</span>
          </div>
        </StResult>
        <StResult>
          <div>
            지민
            <span>거절</span>
          </div>
        </StResult>
        <StResult>
          <div>
            현지
            <span>거절</span>
          </div>
        </StResult>
      </StResultWrapper>
    </StVoteResultWrapper>
  );
};

export default ResponseResult;

const StVoteResultWrapper = styled.div`
  padding: 2rem 2.3rem;

  & > p {
    margin-top: 1.9rem;

    color: #589bff;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    text-align: right;
  }
`;

const StResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  div:first-child > p,
  div:first-child > div > span {
    color: #589bff;
  }
  div:first-child > div {
    border: 0.1rem solid #589bff;
  }
`;

const StResult = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 32rem;
    height: 4.5rem;
    padding: 1.2rem 2.1rem;
    margin-bottom: 0.7rem;

    border: 0.1rem solid #cdd2d9;
    border-radius: 1rem;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 148%;

    & > span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;

      color: #9ca3ad;
    }
  }
`;

const StResponseInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.9rem 0rem;

  & > p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #589bff;
  }

  & > div {
    display: flex;

    & > p {
      margin-left: 0.5rem;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
    }
    & > p:last-child {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 150%;
      color: #c4c4c4;
    }
  }
`;
