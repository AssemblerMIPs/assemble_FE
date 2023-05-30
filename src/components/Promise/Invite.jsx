import { InvitePic } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Invite = () => {
  const navigatePage = useNavigate();
  return (
    <div>
      <Container>
        <span>
          이제 약속을 <span>공유</span>하세요!
        </span>
        <h2>최대 10명까지 응답가능</h2>
        <h3>*본인포함</h3>
        <InvitePic />
        <StCopyLink>
          <button>복사</button>
        </StCopyLink>
        <Button
          onClick={() => {
            navigatePage('/home');
          }}
        >
          홈으로 가기
        </Button>
      </Container>
    </div>
  );
};

export default Invite;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-top: 7rem;
  padding-left: 2rem;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: white;

  & > span {
    color: black;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 2rem;
    line-height: 148%;

    & > span {
      color: #6871ee;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 2rem;
      line-height: 148%;
    }
  }
  & > h2 {
    color: black;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 148%;
  }
  & > h3 {
    color: black;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 148%;
  }
  /* & > svg {
    margin-top: 3rem;
  } */
`;
const StCopyLink = styled.div`
  width: 32.4rem;
  height: 4.5rem;
  position: relative;
  margin-top: 2rem;

  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.5;
  border: 0.1rem solid lightgray;
  border-color: #589bff;

  & > button {
    position: relative;
    margin-top: 0.5rem;
    right: 2rem;
    border: 0rem;
    background-color: white;
    color: #589bff;
    font-family: 'Pretendard';
    font-weight: 600;
  }
`;
const Button = styled.button`
  width: 32.4rem;
  height: 4.5rem;
  position: relative;
  margin-top: 2rem;

  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.5;
  border: 0.1rem solid lightgray;
  border-color: #589bff;
  color: white;
  background: #589bff;
`;
