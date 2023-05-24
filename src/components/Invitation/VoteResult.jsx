import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import React from 'react';
import styled from 'styled-components';

const VoteResult = () => {
  return (
    <StVoteResultWrapper>
      <Header headerName='투표 결과' isCloseBtn />
      <AppointmentName name='담주에 돼지파티 할사람' />
      <p>총 5표</p>

      <StResultWrapper>
        <StResult>
          <p>1위</p>
          <div>
            강남역
            <span>3표</span>
          </div>
        </StResult>
        <StResult>
          <p>2위</p>
          <div>
            강남역
            <span>3표</span>
          </div>
        </StResult>
        <StResult>
          <p>3위</p>
          <div>
            강남역
            <span>3표</span>
          </div>
        </StResult>
      </StResultWrapper>
    </StVoteResultWrapper>
  );
};

export default VoteResult;

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
  & > p {
    margin-bottom: 0.7rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;

    color: #cdd2d9;
  }

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
