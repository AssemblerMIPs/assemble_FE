import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { IcSimpleLogo, IcGoBack } from "../../assets/icons";
import { useRecoilState } from "recoil";
import { PromiseName, PromiseDescrpt } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";

const Promise = () => {
  const [titleNum, setTitleNum] = useState("n");
  const [descNum, setDescNum] = useState("n");

  const [promiseName, setPromiseName] = useRecoilState(PromiseName);
  const [promiseDescrpt, setPromiseDescrpt] = useRecoilState(PromiseDescrpt);

  const navigatePage = useNavigate();

  return (
    <div>
      <Container>
        <div>
          <Top>
            <p>1</p>
            <p>/2</p>
          </Top>
          <div>약속잡기</div>
        </div>
        <InputArea>
          <IcSimpleLogo />
          <div>
            <input
              placeholder="약속 이름을 입력해주세요."
              onChange={(e) => {
                setTitleNum(e.target.value.length);
                setPromiseName(e.target.value);
              }}
              maxLength="10"
            />
            <div>{titleNum}/10</div>
          </div>
          <div>
            <input
              placeholder="약속 설명을 입력해주세요."
              onChange={(e) => {
                setDescNum(e.target.value.length);
                setPromiseDescrpt(e.target.value);
              }}
              maxLength="10"
            />
            <div>{descNum}/10</div>
          </div>
        </InputArea>
        <StButton>
          <button
            type="button"
            className="goBack"
            onClick={() => {
              navigatePage("/home");
            }}
          >
            <IcGoBack />
          </button>
          <button
            type="button"
            onClick={() => {
              navigatePage("/promise/info");
            }}
          >
            다음
          </button>
        </StButton>
      </Container>
    </div>
  );
};

export default Promise;

const Top = styled.div`
  display: flex;
  position: relative;
  left: -10rem;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
`;

const InputArea = styled.article`
  display: flex;
  flex-direction: column;

  align-items: center;

  position: relative;
  width: 32rem;
  height: 16.7rem;
  margin-top: 5rem;

  border: 0.1rem solid #e8eaed;
  border-radius: 1.2rem;
  background-color: white;

  & > svg {
    position: absolute;
    top: -4rem;
    text-align: center;

    width: 6.4rem;
    height: 6.4rem;
  }

  & > div {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > input {
      width: 24.7rem;
      height: 3.6rem;
      margin-top: 2rem;

      color: #589bff;
      font-family: "Pretendard";
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 150%;
      text-align: center;
      border: 0rem;
    }
    & > div {
      justify-align: center;
      margin-top: 2.5rem;
      margin-left: 1rem;
      color: #e8eaed;
      font-family: "Pretendard";
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 146%;
    }
  }

  & > .line {
    position: relative;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    width: 27.3rem;
    height: 0.1rem;
  }
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
