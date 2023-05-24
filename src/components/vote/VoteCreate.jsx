import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VoteCreate = () => {
  const navigatePage = useNavigate();
  const [place, setPlace] = useState(0);
  const [vote, setVote] = useState({
    count: 1,
    place1: "",
  });

  const addOption = () => {
    const count = vote.count + 1;
    if (count > 4) {
      alert("투표 항목을 추가할 수 없습니다.");
      return;
    }
    setVote({ ...vote, count: count, [`place${count}`]: "" });
  };

  const deleteOption = (i) => {
    if (vote.count === 2) {
      alert("투표 항목은 최소 2개입니다.");
      return;
    }

    const newVote = { ...vote };

    for (let n = i; n <= vote.count; n++) {
      if (n === i) {
        delete newVote[`place${n}`];
      } else {
        Object.defineProperty(
          newVote,
          "place" + (n - 1),
          Object.getOwnPropertyDescriptor(newVote, "place" + n)
        );
        delete newVote[`place${n}`];
      }
    }

    setVote({ ...newVote, count: vote.count - 1 });
  };

  const createVote = () => {
    return <></>;
  };

  return (
    <>
      <Container>
        <h3>투표 만들기</h3>
        <Input
          placeholder="투표 제목"
          maxLength="10"
          onChange={(e) => {
            setPlace(e.target.value.length);
          }}
        ></Input>
        <p>{place}/10</p>
        {vote.count > 0 &&
          [...Array(vote.count)].map((item, i) => {
            return (
              <div key={i + 1}>
                <Input
                  className="option"
                  placeholder="항목 입력"
                  value={vote[`place${i + 1}`]}
                  name={`place${i + 1}`}
                  onChange={(e) => {
                    setVote({ ...vote, [e.target.name]: e.target.value });
                  }}
                />
                <p
                  className="delete"
                  onClick={() => {
                    deleteOption(i + 1);
                  }}
                >
                  X
                </p>
              </div>
            );
          })}
        <Button onClick={addOption}>+ 항목추가</Button>
        <button className="create" onClick={createVote}>
          투표 생성
        </button>
      </Container>
    </>
  );
};

export default VoteCreate;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 7rem;
  padding-left: 2rem;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: white;

  & > h3 {
    text-align: center;
    margin-bottom: 2rem;

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
    margin-right: 2rem;
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
      color: #e8eaed;

      position: relative;
      right: 2rem;
      top: 1rem;
      cursor: pointer;
    }
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
