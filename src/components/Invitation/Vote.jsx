import React, { useEffect, useState } from 'react';
import { getVoteInfo, postVoting } from '../../lib/promise';
import { useNavigate, useParams } from 'react-router-dom';

import AppointmentName from '../common/AppointmentName';
import { DetailPromiseName } from '../../recoil/atom';
import Header from '../common/Header';
import { IcBlueLine } from '../../assets/icons';
import OneButton from '../common/OneButton';
import { VoteId } from '../../recoil/atom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const Vote = () => {
  const { promiseId } = useParams();
  const [voteId] = useRecoilState(VoteId);
  const [selectedOption, setSelectedOption] = useState('');
  const [detailPromiseName] = useRecoilState(DetailPromiseName);
  const [voteInfo, setVoteInfo] = useState();

  const navigate = useNavigate();

  const getVote = async () => {
    const res = await getVoteInfo(promiseId);
    setVoteInfo(res.voteInfo[0]);
  };

  const handleOptionChange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    setSelectedOption(selectedIndex);
  };

  const handleVoting = async () => {
    await postVoting(voteId, Number(selectedOption));
    navigate('/invitation/result?isAttend=true');
  };

  useEffect(() => {
    getVote();
  }, []);

  return (
    <StVoteWrapper>
      <Header headerName='장소 투표하기' />
      <AppointmentName name={detailPromiseName} />
      <p>{voteInfo?.voteName}</p>
      <StVoteOption>
        {voteInfo?.options &&
          voteInfo?.options.map((option, index) => (
            <label key={index} className={selectedOption === index ? 'selected' : ''}>
              <span>{option}</span>
              <input
                type='radio'
                value={index}
                checked={selectedOption === index}
                onChange={handleOptionChange}
              />
            </label>
          ))}
      </StVoteOption>
      <OneButton btnName='확인' handleClick={handleVoting} />
    </StVoteWrapper>
  );
};

export default Vote;

const StVoteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin-top: 3rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }
`;

const StVoteOption = styled.div`
  width: 29.6rem;
  margin-top: 1.9rem;

  & > label {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 4.8rem;
    margin-bottom: 1.5rem;

    border: 0.1rem solid #d0d4da;
    border-radius: 0.8rem;

    & > span {
      padding: 1rem;

      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 148%;
    }

    & > input {
      margin-right: 1rem;
    }

    &.selected {
      border: 0.1rem solid #589bff;
    }
  }
`;
