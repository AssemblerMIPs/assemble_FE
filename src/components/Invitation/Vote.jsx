import React, { useState } from 'react';

import Header from '../common/Header';
import { IcBlueLine } from '../../assets/icons';
import OneButton from '../common/OneButton';
import styled from 'styled-components';

const Vote = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StVoteWrapper>
      <Header headerName='장소 투표하기' />
      <h2>담주에 돼지파티 할사람</h2>
      <IcBlueLine />
      <p>애들아 장소 투표해줘~~</p>
      <StVoteOption>
        <label className={selectedOption === 'option1' ? 'selected' : ''}>
          홍대
          <input
            type='radio'
            value='option1'
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
        </label>
        <br />
        <label className={selectedOption === 'option2' ? 'selected' : ''}>
          건대
          <input
            type='radio'
            value='option2'
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
        </label>
        <br />
        <label className={selectedOption === 'option3' ? 'selected' : ''}>
          냥대
          <input
            type='radio'
            value='option3'
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
        </label>
      </StVoteOption>
      <OneButton btnName='확인' />
    </StVoteWrapper>
  );
};

export default Vote;

const StVoteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    margin-top: 2rem;
    color: #589bff;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
  }

  & > svg {
    margin-top: 0.8rem;
  }

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
    justify-content: space-between;

    width: 100%;
    height: 4.8rem;
    padding: 1.4rem 2rem;

    border: 0.1rem solid #d0d4da;
    border-radius: 0.8rem;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 148%;

    &.selected {
      border: 0.1rem solid #589bff;
    }
  }
`;
