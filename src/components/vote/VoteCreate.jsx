import React from "react";
import styled from "styled-components";
import { useState } from "react";

const VoteCreate = () => {
  const [place, setPlace] = useState("n");

  return (
    <>
      <Container>
        <h3>약속 정보 입력</h3>
        <Input
          placeholder="투표 제목"
          onChange={(e) => {
            setPlace(e.target.value.length);
          }}
        ></Input>
        <p>{place}/10</p>
        <Input
          className="option"
          placeholder="항목 입력"
          onChange={(e) => {
            setPlace(e.target.value.length);
          }}
        />
        <Button
          onClick={() => {
            return (
              <Input
                className="option"
                placeholder="항목 입력"
                onChange={(e) => {
                  setPlace(e.target.value.length);
                }}
              />
            );
          }}
        >
          + 항목추가
        </Button>
      </Container>
    </>
  );
};

export default VoteCreate;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 7rem;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: white;

  & > h3 {
    text-align: center;

    color: black;
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 148%;
  }

  & > p {
    color: #e8eaed;
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 148%;
    text-align: right;
    margin-right: 5rem;
  }

  & > .option {
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  width: 32rem;
  height: 4.8rem;
  position: relative;
  align-items: center;

  border: 0.1rem solid #e8eaed;
  border-radius: 0.8rem;

  color: #e8eaed;
  font-family: "Pretendard";
  font-style: normal;
  font-size: 1.4rem;
  line-height: 148%;
  text-align: left;
`;

const Button = styled.button`
  width: 32rem;
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
