import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import { IcLine } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const DutchPay = () => {
  const [store, setStore] = useState('');
  const [price, setPrice] = useState(0);

  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStore('');
    setPrice(0);
  };

  return (
    <StDutchPayWrapper>
      <Header headerName='더치페이' isCloseBtn />
      <AppointmentName name='담주에 돼지파티 할사람' />
      <StDutchPay>
        <p>정산 금액</p>
        <div>
          <p>불타는 떡볶이</p>
          <span>30000원</span>
        </div>
      </StDutchPay>
      <StComment>
        <form onSubmit={handleSubmit}>
          <label>
            <span>가게명</span>
            <input
              type='text'
              value={store}
              onChange={handleStoreChange}
              placeholder='가게명을 입력해주세요'
            />
          </label>
          <IcLine />
          <label>
            <span>금액</span>
            <input
              type='number'
              value={price}
              onChange={handlePriceChange}
              placeholder='금액을 입력해주세요'
            />
          </label>
          <IcLine />
          <StBtnWrapper>
            <button type='submit'>추가</button>
          </StBtnWrapper>
        </form>
      </StComment>
      <StResultWrapper>
        <p>정산 현황</p>
        <StResult>
          <div>
            <span>현지</span>
            <p>10000원</p>
          </div>
        </StResult>
        <StResult>
          <div>
            <span>현지</span>
            <p>10000원</p>
          </div>
        </StResult>
        <StResult>
          <div>
            <span>현지</span>
            <p>10000원</p>
          </div>
        </StResult>
      </StResultWrapper>

      <button type='submit'>정산 완료</button>
    </StDutchPayWrapper>
  );
};

export default DutchPay;

const StDutchPayWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2.4rem 2.1rem;
  margin-bottom: 10rem;

  & > button {
    position: fixed;
    bottom: 3.9rem;

    width: 31.9rem;
    height: 4.5rem;

    color: white;
    background-color: #589bff;
    border-radius: 1rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
  }
`;

const StDutchPay = styled.div`
  & > p {
    margin: 1.2rem 0rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 32rem;
    padding: 1.2rem;
    margin-bottom: 0.7rem;

    border: 0.1rem solid #589bff;
    border-radius: 1rem;

    & > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 148%;
    }

    & > span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 148%;

      color: #707070;
    }
  }

  & > button {
    width: 100%;
    height: 3.9rem;

    border: 0.1rem solid #cdd2d9;
    border-radius: 1rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 148%;

    color: #707070;
  }
`;

const StResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 2.4rem;

  & > p {
    margin-bottom: 1.2rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
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

    border: 0.1rem solid #589bff;
    border-radius: 1rem;

    & > span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 148%;
    }

    & > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 148%;
      color: #5e5e5e;
    }
  }
`;

const StComment = styled.div`
  display: flex;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 32.4rem;
    padding-top: 1rem;

    border: 0.1rem solid #cdd2d9;
    border-radius: 1rem;

    & > label {
      display: flex;
      align-items: center;

      padding: 0rem 1.2rem;

      & > span {
        width: 7rem;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 148%;
      }

      & > input {
        width: 20rem;
        padding: 1.2rem;
        margin-left: 0.3rem;

        border: none;
        outline: none;
      }
    }

    & > button {
      width: 5rem;
      height: 3rem;

      color: white;
      background-color: #589bff;
      border-radius: 1rem;
    }
  }
`;

const StBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  padding: 1rem;

  & > button {
    width: 7rem;
    height: 3rem;

    color: white;
    background-color: #589bff;
    border-radius: 1rem;
  }
`;
