import { VoteName, VoteOptions } from '../../recoil/atom';

import Header from '../common/Header';
import OneButton from '../common/OneButton';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

const VoteCreate = () => {
  const [voteName, setVoteName] = useRecoilState(VoteName);
  const [voteOptions, setVoteOptions] = useRecoilState(VoteOptions);
  const [placeNum, setPlaceNum] = useState(0);

  const navigatePage = useNavigate();

  const addOption = () => {
    const count = voteOptions.length + 1;
    if (count > 3) {
      alert('투표 항목은 3개까지만 만들 수 있습니다.');
      return;
    }
    setVoteOptions([...voteOptions, '']);
  };

  const deleteOption = (i) => {
    if (voteOptions.length === 2) {
      alert('투표 항목은 최소 2개입니다.');
      return;
    }

    const updatedVoteOptions = [...voteOptions];
    updatedVoteOptions.splice(i, 1);
    setVoteOptions(updatedVoteOptions);
  };

  const handleCreateVote = async () => {
    if (voteOptions.some((option) => option.trim() === '')) {
      alert('투표 항목은 비어 있을 수 없습니다.');
      return;
    }
    navigatePage('/promise/info');
  };

  return (
    <StVoteCreateWrapper>
      <Header headerName={'투표 만들기'} />
      <Container>
        <Input
          className='voteName'
          value={voteName}
          placeholder='투표 제목'
          maxLength='10'
          onChange={(e) => {
            setPlaceNum(e.target.value.length);
            setVoteName(e.target.value);
          }}
        ></Input>
        <p>{placeNum}/10</p>
        {voteOptions.length > 0 &&
          [...Array(voteOptions.length)].map((item, i) => {
            return (
              <div key={i + 1}>
                <Input
                  className='option'
                  placeholder='항목 입력'
                  value={voteOptions[i]}
                  onChange={(e) => {
                    const updatedVote = [...voteOptions];
                    updatedVote[i] = e.target.value;
                    setVoteOptions(updatedVote);
                  }}
                />
                <p
                  className='delete'
                  onClick={() => {
                    deleteOption(i);
                  }}
                >
                  X
                </p>
              </div>
            );
          })}
        <Button onClick={addOption}>+ 항목추가</Button>
      </Container>
      <OneButton
        btnName='투표 생성'
        handleClick={handleCreateVote}
        disabled={!voteName || !voteOptions}
      />
    </StVoteCreateWrapper>
  );
};

export default VoteCreate;

const StVoteCreateWrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-top: 4rem;
  padding-left: 2rem;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: white;

  & > h3 {
    text-align: center;
    margin-bottom: 2rem;

    color: black;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 148%;
  }

  & > p {
    position: absolute;
    top: 0.5rem;
    right: 1.4rem;

    color: ${({ theme }) => theme.colors.Grey400};

    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 148%;
    text-align: right;
    margin-right: 4rem;
    padding: 1rem;
  }

  & > .option {
    margin-bottom: 1rem;
  }
  & > .create {
    width: 26.6rem;
    height: 5.2rem;
    position: relative;
    top: 2rem;
    left: 5.5rem;
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    text-align: center;
    line-height: 150%;
    border: 0.1rem solid #589bff;
    color: white;
    background: #589bff;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;

    .delete {
      font-size: 1.6rem;
      text-align: center;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.Grey400};

      position: relative;
      right: 2rem;
      top: 1.2rem;
      cursor: pointer;
    }
  }

  & > .voteName {
    margin-bottom: 3.6rem;
  }
`;

const Input = styled.input`
  width: 32rem;
  height: 4.8rem;
  position: relative;
  align-items: center;

  border: 0.1rem solid #e8eaed;
  border-radius: 0.8rem;

  color: black;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 1.4rem;
  line-height: 148%;
  text-align: left;

  padding-left: 2rem;
`;

const Button = styled.button`
  width: 100%;

  max-width: 34.4rem;
  height: 4.8rem;
  position: relative;

  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 150%;
  border: 0.1rem solid #589bff;
  color: #589bff;
  background: white;
`;
