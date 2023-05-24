import { IcLine, IcMainIcon } from '../../assets/icons';

import Header from '../common/Header';
import React from 'react';
import TwoButton from '../common/TwoButton';
import styled from 'styled-components';

const Invitation = () => {
  return (
    <StInvitationWrapper>
      <Header headerName='약속 상세보기' />
      <StInvitation>
        <IcMainIcon />
        <h2>담주에 돼지파티 할사람</h2>
        <p>양꼬치 칭따오 조지자</p>
        <div>
          <IcLine />
        </div>
        <StContent>
          <h3>날짜/시간</h3>
          <p>5월 1일 오후 3시</p>
          <h3>장소</h3>
          <p>강남역</p>
          <h3>참여자</h3>
          <p>윤여정윤여, 진희철진희, 권지명권지, 권지명권지</p>
        </StContent>
      </StInvitation>
      <TwoButton leftBtn='거절하기' rightBtn='수락하기' />
    </StInvitationWrapper>
  );
};

export default Invitation;

const StInvitationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin-top: 2.4rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 158%;
  }
`;

const StInvitation = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 32rem;
  height: 34.3rem;
  margin-top: 8.1rem;

  border: 0.1rem solid #e8eaed;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.Grey200};

  & > svg {
    position: absolute;
    top: -4rem;
    right: 12.8rem;

    width: 6.4rem;
    height: 6.4rem;
  }

  & > h2 {
    margin-top: 3.1rem;

    color: #589bff;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }

  & > p {
    margin-top: 0.31rem;

    color: #5b687a;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 146%;
    text-align: center;
  }

  & > div {
    width: 27.3rem;
  }
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.6rem;

  & > h3 {
    margin-bottom: 0.4rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 146%;

    color: #6a707a;
  }

  & > p {
    margin-bottom: 1.6rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 146%;
  }
`;
