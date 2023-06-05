import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import React from 'react';
import { getVoteInfo } from '../../lib/promise';
import styled from 'styled-components';

const VoteResult = () => {
  const { promiseId } = useParams();
  const [voteResult, setVoteResult] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const getVoteResult = async () => {
    const voteresult = await getVoteInfo(promiseId);
    setVoteResult(voteresult);
    setTotalCount(voteResult.result.reduce((sum, option) => sum + option.count, 0));
  };

  useEffect(() => {
    getVoteResult();
  }, []);

  return (
    <StVoteResultWrapper>
      <Header headerName='투표 결과' isCloseBtn />
      <AppointmentName name={voteResult?.voteInfo.voteName} />
      <p>총 {totalCount}표</p>
      <StResultWrapper>
        {voteResult?.result.map(({ optionName, count }, index) => (
          <StResult key={index}>
            <p>{index + 1}위</p>
            <div>
              {optionName}
              <span>{count}표</span>
            </div>
          </StResult>
        ))}
      </StResultWrapper>
    </StVoteResultWrapper>
  );
};

export default VoteResult;

const StVoteResultWrapper = styled.div`
  padding: 2rem 2.3rem;

  & > p {
    margin-top: 1.9rem;
    margin-right: 3.5rem;

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
  justify-content: center;

  width: 100%;

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

    width: 28rem;
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
