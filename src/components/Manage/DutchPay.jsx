import React, { useEffect } from 'react';
import { getDutchList, postCreateDutch } from '../../lib/invitation';
import { useNavigate, useParams } from 'react-router-dom';

import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import { IcLine } from '../../assets/icons';
import { getPromiseResponseList } from '../../lib/promise';
import styled from 'styled-components';
import { useState } from 'react';

const DutchPay = () => {
  const { promiseId } = useParams();

  const [store, setStore] = useState('');
  const [price, setPrice] = useState();

  const [priceList, setPriceList] = useState([]);
  const [dutchList, setDutchList] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [attendList, setAttendList] = useState([]);
  const [dutchPrice, setDutchPrice] = useState(0);

  const navigate = useNavigate();

  const getPromiseResponse = async () => {
    const dutchs = await getDutchList(promiseId);
    setDutchList(dutchs);
    setTotalPrice(dutchs.reduce((total, current) => total + current.totalPrice, 0));
  };

  const calculateDutchPrice = async () => {
    const attend = await getPromiseResponseList(promiseId);
    setAttendList(attend.attendance);

    const attendCount = attend.attendance.length;
    setDutchPrice(Math.round(totalPrice / attendCount));
  };

  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postCreateDutch(promiseId, store, price);

    // setPriceList((prevPriceList) => [...prevPriceList, newPrice]);
    // setTotalPrice((prevTotalPrice) => prevTotalPrice + Number(price));
    // postUpdateDutch(promiseId, totalPrice);

    const attendCount = attendList.length;
    setDutchPrice(Math.round((totalPrice + Number(price)) / attendCount));

    setStore('');
    setPrice(0);
  };

  useEffect(() => {
    getPromiseResponse();
  }, []);

  useEffect(() => {
    calculateDutchPrice();
  }, [dutchList]);

  return (
    <StDutchPayWrapper>
      <Header headerName='더치페이' isCloseBtn />
      <AppointmentName name='담주에 돼지파티 할사람' />
      <StDutchPay>
        <StPrice>
          <p>정산 금액</p>
          <p>총 {totalPrice}원</p>
        </StPrice>
        <ul>
          {dutchList.map((item) => (
            <li key={item.storeName}>
              <p>{item.storeName}</p>
              <span>{item.totalPrice}원</span>
            </li>
          ))}
        </ul>
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
          {attendList.map((attend) => (
            <div>
              <span>{attend.userId}</span>
              <p>{dutchPrice}</p>
            </div>
          ))}
        </StResult>
      </StResultWrapper>
      <button
        type='submit'
        onClick={() => {
          navigate(-1);
        }}
      >
        정산 완료
      </button>
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

const StPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;

  & > p {
    margin: 1.2rem 0rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
  }
`;

const StDutchPay = styled.div`
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 32rem;

    & > li {
      width: 100%;
      max-width: 30rem;
      display: flex;
      justify-content: space-between;

      padding: 1.2rem;
      margin-bottom: 0.7rem;

      border: 0.1rem solid #589bff;
      border-radius: 1rem;
    }

    & > li > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 148%;
    }

    & li > span {
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
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  max-width: 32rem;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 32rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    height: 4.5rem;
    margin-bottom: 0.7rem;

    border: 0.1rem solid #589bff;
    border-radius: 1rem;

    & > span {
      padding-left: 2rem;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 148%;
    }

    & > p {
      padding-right: 2rem;
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
