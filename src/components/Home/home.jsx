import { IcGreyLine, IcLeftBtn, IcProfile, IcRightBtn } from '../../assets/icons';

import Nav from '../common/Nav';
import React from 'react';
import styled from 'styled-components';

const home = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  return (
    <>
      <Container>
        <div className='profile'>
          <IcProfile />
          <p>닉네임</p>
        </div>
        <div className='today'>
          <p>오늘의 약속</p>
          <span>0</span>
        </div>
        <MonthList>
          <div>
            <p>
              {year}년 {month}월
            </p>
            <div>
              <IcLeftBtn />
              <IcRightBtn />
            </div>
          </div>
          <IcGreyLine />
          <Promise></Promise>
        </MonthList>
        <Contents>
          <div>
            <p>컨텐츠 추천</p>
            <div>
              <IcLeftBtn />
              <IcRightBtn />
            </div>
          </div>
          <IcGreyLine />
          <p>왕십리에서 볼링 한판?</p>
        </Contents>
        <Nav />
      </Container>
    </>
  );
};

export default home;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-top: 7rem;
  padding-left: 1.5rem;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.Grey200};
  box-shadow: 0.5rem #f7f7f8;

  & > .profile {
    margin-top: 6rem;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    & > p {
      margin-left: 2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 158%;
    }
  }
  & > .today {
    width: 32.8rem;
    height: 6rem;
    display: flex;
    flex-wrap: wrap;

    background-color: white;
    box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem #e8eaed;
    border-radius: 1.2rem;

    & > p {
      padding: 1.5rem 2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 148%;
    }
    & > span {
      width: 2.7rem;
      height: 1.8rem;
      padding: 1.5rem;
      border-radius: 0.1rem;

      color: ${({ theme }) => theme.colors.Blue};
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 148%;
    }
    & > span::after {
      width: 2.7rem;
      height: 1.8rem;
      border-radius: 0.1rem;
      background-color: ${({ theme }) => theme.colors.Blue};
      opacity: 0.2;
    }
  }
`;

const MonthList = styled.div`
  width: 32.8rem;
  height: 21.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  background-color: white;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem #e8eaed;
  border-radius: 1.2rem;
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 6rem;

    & > p {
      width: 20rem;
      padding: 1.5rem 2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 148%;
    }
    & > div {
      padding-left: 4.5rem;
      & > svg {
        width: 2rem;
        height: 2rem;
        margin: 0.2rem;
        margin-top: 2rem;
      }
    }
  }
  & > svg {
    position: relative;
    top: -5.5rem;
    left: 2rem;
  }
`;

const Promise = styled.div`
  color: black;
  font-family: 'Pretendard';
`;

const Contents = styled.div`
  width: 32.8rem;
  height: 11.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  background-color: white;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem #e8eaed;
  border-radius: 1.2rem;
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 6rem;

    & > p {
      width: 20rem;
      padding: 1.5rem 2rem;
      color: black;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 148%;
    }
    & > div {
      padding-left: 4.5rem;
      & > svg {
        width: 2rem;
        height: 2rem;
        margin: 0.2rem;
        margin-top: 2rem;
      }
    }
  }
  & > svg {
    position: relative;
    top: -1.5rem;
    left: 2rem;
  }
  & > p {
    margin-left: 10rem;
    margin-bottom: 2rem;
    color: black;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 148%;
  }
`;
