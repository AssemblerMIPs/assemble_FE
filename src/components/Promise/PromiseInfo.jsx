import 'react-datepicker/dist/react-datepicker.css';

import {
  PromiseDescription,
  PromiseEndDate,
  PromiseId,
  PromiseName,
  PromisePlace,
  PromiseStartDate,
  VoteName,
  VoteOptions,
} from '../../recoil/atom';
import { postCreateVote, postPromise } from '../../lib/promise';

import DatePicker from 'react-datepicker';
import Header from '../common/Header';
import OneButton from '../common/OneButton';
import React from 'react';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

const PromiseInfo = () => {
  const [promiseName] = useRecoilState(PromiseName);
  const [promiseDescription] = useRecoilState(PromiseDescription);

  const [placeNum, setPlaceNum] = useState(0);

  const [promisePlace, setPromisePlace] = useRecoilState(PromisePlace);
  const [promiseStartDate, setPromiseStartDate] = useRecoilState(PromiseStartDate);
  const [promiseEndDate, setPromiseEndDate] = useRecoilState(PromiseEndDate);

  const [voteName, setVoteName] = useRecoilState(VoteName);
  const [voteOptions, setVoteOptions] = useRecoilState(VoteOptions);
  const [promiseId, setPromiseId] = useRecoilState(PromiseId);

  const navigatePage = useNavigate();

  const handleCreatePromise = async () => {
    console.log(promiseName, promiseStartDate, promiseEndDate, promiseDescription);
    const res = await postPromise(
      promiseName,
      promiseStartDate,
      promiseEndDate,
      promiseDescription,
    );
    setPromiseId(res._id);
    await postCreateVote(voteName, res._id, voteOptions);
    navigatePage('/invite');
  };

  return (
    <StInfoWrapper>
      <Header headerName={'약속 정보 입력'} />
      <StCurPage>
        <span>2</span> / 2
      </StCurPage>
      <Container>
        <h2>약속에 대한 정보를 입력해주세요!</h2>
        <div className='pDate'>
          <div>약속 일시</div>
          <div>
            <SDatePicker
              selected={promiseStartDate}
              dateFormatCalendar='yyyy년 MM월'
              dateFormat='MM/dd HH시 mm분'
              locale={ko}
              minDate={new Date()}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={30}
              onChange={(date) => {
                setPromiseStartDate(date);
              }}
            />
          </div>
          <div>
            <SDatePicker
              selected={promiseEndDate}
              dateFormatCalendar='yyyy년 MM월'
              dateFormat='MM/dd HH시 mm분'
              locale={ko}
              minDate={promiseStartDate}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={60}
              onChange={(date) => {
                setPromiseEndDate(date);
              }}
            />
          </div>
        </div>
        <div className='pPlace'>
          <p>장소(선택)</p>
          {voteName ? (
            <StMakeVoteBtn
              type='button'
              onClick={() => {
                navigatePage('/promise/vote');
              }}
            >
              투표가 생성되었습니다.
            </StMakeVoteBtn>
          ) : (
            <>
              <div>
                <Input
                  value={promisePlace}
                  placeholder='강남, 온라인 등'
                  onChange={(e) => {
                    setPlaceNum(e.target.value.length);
                    setPromisePlace(e.target.value);
                  }}
                  maxLength='10'
                />
                <StPlaceNum>{placeNum}/10</StPlaceNum>
              </div>

              <StMakeVoteBtn
                type='button'
                onClick={() => {
                  navigatePage('/promise/vote');
                }}
              >
                투표 만들기
              </StMakeVoteBtn>
            </>
          )}
        </div>
      </Container>
      <OneButton
        btnName='약속 생성'
        handleClick={handleCreatePromise}
        disabled={!promiseStartDate || !promiseEndDate || !(promisePlace || voteName)}
      />
    </StInfoWrapper>
  );
};

export default PromiseInfo;

const StInfoWrapper = styled.div`
  position: relative;
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

const SDatePicker = styled(DatePicker)`
  width: 10rem;
  margin-top: 1.5rem;
  border: 0rem;
  background-color: transparent;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-top: 2.7rem;
  padding-left: 2rem;
  align-items: left;
  text-align: center;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: white;

  & > div {
    display: flex;
    flex-wrap: wrap;

    & > div {
      position: relative;
      right: 2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 148%;
    }
    & > .title {
      position: relative;
      text-align: center;
      left: 7rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 148%;
    }
  }

  & > h2 {
    text-align: left;
    margin-top: 2rem;

    color: black;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 150%;
  }
  & > .pDate {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 32rem;
    height: 4.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.Grey200};

    & > div:first-child {
      margin-left: 3rem;
      margin-top: 1.2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 148%;
    }
  }
  & > .pPlace {
    text-align: center;

    & > p {
      margin-top: 1rem;
      text-align: left;

      color: black;
      font-family: 'Pretendard';
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 148%;
    }
    & > div {
      margin-left: 2rem;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;

      width: 32rem;
      height: 4.8rem;
      border: 0.1rem solid #e8eaed;
      border-radius: 0.8rem;
      background-color: white;
      margin-bottom: 1rem;

      & > p {
        margin-top: 1rem;
        margin-right: 1rem;

        color: #e8eaed;
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 148%;
        text-align: center;
      }
    }
  }
`;

const Input = styled.input`
  width: 25rem;
  height: 4.5rem;
  position: relative;

  border: 0rem;
  font-size: 1.6rem;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Grey400};
  }
`;

const StPlaceNum = styled.p`
  padding-top: 0.2rem;
  padding-left: 1.5rem;
`;

const StMakeVoteBtn = styled.button`
  width: 32rem;
  height: 4.8rem;
  position: relative;

  padding: 0.6rem 1.2rem;
  margin-top: 1rem;

  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 150%;
  border: 0.1rem solid #589bff;
  color: #589bff;
  background: white;
`;
