import { PromiseDescription, PromiseName } from '../../recoil/atom';
import { useEffect, useState } from 'react';

import Header from '../common/Header';
import { IcSimpleLogo } from '../../assets/icons';
import OneButton from '../common/OneButton';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const MakePromise = () => {
  const [title, setTitle] = useRecoilState(PromiseName);
  const [desc, setDesc] = useRecoilState(PromiseDescription);
  const [titleCount, setTitleCount] = useState(0);
  const [descCount, setDescCount] = useState(0);

  const navigatePage = useNavigate();

  return (
    <StPromiseWrapper>
      <Header headerName={'약속 잡기'} />
      <StCurPage>
        <span>1</span> / 2
      </StCurPage>
      <StPromise>
        <IcSimpleLogo />
        <StInputTitle
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleCount(e.target.value.length);
          }}
          placeholder='약속 이름을 입력해주세요.'
          maxLength={15}
        ></StInputTitle>
        <p>{titleCount}/15</p>
        <StInputDesc
          type='text'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            setDescCount(e.target.value.length);
          }}
          placeholder='약속 설명을 입력해주세요.'
          maxLength={20}
        ></StInputDesc>
        <p>{descCount}/20</p>
      </StPromise>
      <OneButton
        btnName='다음'
        handleClick={() => {
          navigatePage('/promise/info');
        }}
        disabled={!title || !desc}
      />
    </StPromiseWrapper>
  );
};

export default MakePromise;

const StPromiseWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StCurPage = styled.p`
  position: absolute;
  top: 2.8rem;
  left: 2rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 148%;

  color: #cdd2d9;

  & > span {
    color: black;
    font-size: 14px;
  }
`;

const StPromise = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 32rem;
  height: fit-content;

  margin-top: 9.7rem;
  padding-top: 5rem;

  background-color: ${({ theme }) => theme.colors.Grey100};
  border-radius: 1.2rem;
  border: 1px solid #e8eaed;

  & > svg {
    position: absolute;
    top: -4rem;
    left: 12.8rem;
  }

  & > p {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.Grey400};
  }
`;

const StInputTitle = styled.input`
  width: 100%;

  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.Blue};
  font-size: 2.4rem;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Blue};
  }
`;

const StInputDesc = styled.input`
  width: 90%;
  padding-bottom: 1rem;

  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
  outline: none;

  background: transparent;
  color: ${({ theme }) => theme.colors.Grey500};
  font-size: 1.4rem;
  text-align: center;
`;
