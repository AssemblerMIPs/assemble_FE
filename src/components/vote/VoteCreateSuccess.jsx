import 'react-datepicker/dist/react-datepicker.css';

import {
  PromiseDescription,
  PromiseEndDate,
  PromiseName,
  PromisePlace,
  PromiseStartDate,
  VoteOptions,
} from '../../recoil/atom';

import { IcGoBack } from '../../assets/icons';
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const VoteCreateSuccess = () => {
  const [promisePlace, setPromisePlace] = useRecoilState(PromisePlace);
  const [promiseStartDate, setPromiseStartDate] = useRecoilState(PromiseStartDate);
  const [promiseEndDate, setPromiseEndDate] = useRecoilState(PromiseEndDate);

  const setDateFormat = (date) => {
    date = moment(date).format('MM/DD HH시 mm분');
    return date;
  };
  const navigatePage = useNavigate();
  const sendPromiseData = () => {
    axios.post('http://localhost:1111/promise', {
      promiseName: PromiseName,
      promiseStartDate: PromiseStartDate,
      promiseEndDate: PromiseEndDate,
      promiseDescription: PromiseDescription,
      promisePlace: PromisePlace,
      userId: UserId,
    });
  };
  const sendVoteData = () => {
    axios.post('http://localhost:1111/createVote', {
      voteName: PromisePlace,
      promiseId: 'string',
      options: VoteOptions,
    });
  };

  return (
    <>
      <Container>
        <div>
          <Top>
            <p>2</p>
            <p>/2</p>
          </Top>
          <div className='title'>약속 정보 입력</div>
        </div>

        <h2>약속에 대한 정보를 입력해주세요!</h2>
        <div className='pDate'>
          <div>약속 일시</div>
          <p>{setDateFormat(promiseStartDate)}</p>
          <p>{setDateFormat(promiseEndDate)}</p>
        </div>
        <div className='pPlace'>
          <p>장소(선택)</p>
          <div>
            <p>{promisePlace}</p>
          </div>
          <Button>투표가 생성되었습니다.</Button>
        </div>
        <StButton>
          <button
            type='button'
            className='goBack'
            onClick={() => {
              navigatePage('/promise/vote');
            }}
          >
            <IcGoBack />
          </button>
          <button
            type='button'
            onClick={() => {
              sendPromiseData();
              sendVoteData();
              navigatePage('/invite');
            }}
          >
            약속 생성
          </button>
        </StButton>
      </Container>
    </>
  );
};

export default VoteCreateSuccess;

const Top = styled.div`
  display: flex;
  position: relative;

  & > p:first-child {
    text-align: right;
    margin-left: 2rem;

    color: black;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 148%;
  }

  & > p {
    text-align: left;

    color: #e8eaed;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 148%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-top: 7rem;
  margin-left: 1rem;
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
    background-color: #d9d9d9;

    & > div:first-child {
      margin-left: 3rem;
      margin-top: 1.2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 148%;
    }

    & > p {
      margin-top: 1.2rem;
      margin-right: 1rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 148%;
    }
  }
  & > .pPlace {
    text-align: center;

    & > p {
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
        margin-left: 1rem;
        text-align: center;

        color: black;
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 148%;
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
`;

const Button = styled.button`
  width: 32rem;
  height: 4.5rem;
  position: relative;

  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 150%;
  border: 0.1rem solid #589bff;
  color: white;
  background: #589bff;
`;

const StButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  position: fixed;
  bottom: 3.2rem;

  & > button {
    width: 26.6rem;
    height: 5.2rem;

    border-radius: 1rem;
    background-color: #589bff;
    color: white;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }

  & > .goBack {
    width: 5.2rem;
    height: 5.2rem;

    background-color: #e8eaed;
  }
`;
