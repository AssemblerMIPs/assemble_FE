import React from "react";
import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { IcGoBack } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  PromiseStartDate,
  PromiseEndDate,
  PromisePlace,
} from "../../recoil/atom";

const PromiseInfo = () => {
  const [placeNum, setPlaceNum] = useState(0);

  const [promisePlace, setPromisePlace] = useRecoilState(PromisePlace);
  const [promiseStartDate, setPromiseStartDate] =
    useRecoilState(PromiseStartDate);
  const [promiseEndDate, setPromiseEndDate] = useRecoilState(PromiseEndDate);

  const navigatePage = useNavigate();
  const sendInfoData = () => {
    console.log(promisePlace, promiseStartDate, promiseEndDate);
  };

  return (
    <>
      <Container>
        <div>
          <Top>
            <p>2</p>
            <p>/2</p>
          </Top>
          <div className="title">약속 정보 입력</div>
        </div>

        <h2>약속에 대한 정보를 입력해주세요!</h2>
        <div className="pDate">
          <div>약속 일시</div>
          <div>
            <SDatePicker
              selected={promiseStartDate}
              dateFormatCalendar="yyyy년 MM월"
              dateFormat="MM/dd HH시 mm분"
              locale={ko}
              minDate={new Date()}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              onChange={(date) => {
                setPromiseStartDate(date);
              }}
            />
          </div>
          <div>
            <SDatePicker
              selected={promiseEndDate}
              dateFormatCalendar="yyyy년 MM월"
              dateFormat="MM/dd HH시 mm분"
              locale={ko}
              minDate={promiseStartDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              onChange={(date) => {
                setPromiseEndDate(date);
              }}
            />
          </div>
        </div>
        <div className="pPlace">
          <p>장소(선택)</p>
          <div>
            <Input
              placeholder="강남, 온라인 등"
              onChange={(e) => {
                setPlaceNum(e.target.value.length);
                setPromisePlace(e.target.value);
              }}
              maxLength="10"
            />
            <p>{placeNum}/10</p>
          </div>
          <Button
            onClick={() => {
              console.log(promisePlace, promiseStartDate, promiseEndDate);
              //sendInfoData;
              navigatePage("/promise/vote");
            }}
          >
            투표 만들기
          </Button>
        </div>
        <StButton>
          <button
            type="button"
            className="goBack"
            onClick={() => {
              navigatePage("/promise");
            }}
          >
            <IcGoBack />
          </button>
          <button
            type="button"
            onClick={() => {
              navigatePage("/promise/votesuccess");
            }}
          >
            다음
          </button>
        </StButton>
      </Container>
    </>
  );
};

export default PromiseInfo;

const Top = styled.div`
  display: flex;
  position: relative;

  & > p:first-child {
    text-align: right;
    margin-left: 2rem;

    color: black;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 148%;
  }

  & > p {
    text-align: left;

    color: #e8eaed;
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 148%;
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

  margin-top: 7rem;
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
      font-family: "Pretendard";
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 148%;
    }
    & > .title {
      position: relative;
      text-align: center;
      left: 7rem;
      color: black;
      font-family: "Pretendard";
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 148%;
    }
  }

  & > h2 {
    text-align: left;
    margin-top: 2rem;

    color: black;
    font-family: "Pretendard";
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
      font-family: "Pretendard";
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 148%;
    }
  }
  & > .pPlace {
    text-align: center;

    & > p {
      text-align: left;

      color: black;
      font-family: "Pretendard";
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
        font-family: "Pretendard";
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
  color: #589bff;
  background: white;
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
    font-family: "Pretendard";
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
