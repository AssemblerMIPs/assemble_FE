import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import { IcRight } from '../../assets/icons';
import Nav from '../common/Nav';
import React from 'react';
import styled from 'styled-components';

const Manage = () => {
  return (
    <StManage>
      <Header headerName='약속 관리' />
      <AppointmentName name='내 약속 관리' />

      <StAppointment>
        <StAppoinmentInfo>
          <StFirstWrapper>
            <StParty className='leader'>파티장</StParty>
            <StPartyTitle>파티이름</StPartyTitle>
          </StFirstWrapper>
          <StVoteCnt>2명 응답완료</StVoteCnt>
        </StAppoinmentInfo>
        <StDetailBtn type='button'>
          <IcRight />
        </StDetailBtn>
      </StAppointment>

      <StAppointment>
        <StAppoinmentInfo>
          <StFirstWrapper>
            <StParty>파티원</StParty>
            <StPartyTitle>파티이름</StPartyTitle>
          </StFirstWrapper>
          <StVoteCnt>2명 응답완료</StVoteCnt>
        </StAppoinmentInfo>
        <StDetailBtn type='button'>
          <IcRight />
        </StDetailBtn>
      </StAppointment>

      <StNavWrapper>
        <Nav />
      </StNavWrapper>
    </StManage>
  );
};

export default Manage;

const StManage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;

const StAppointment = styled.article`
  display: flex;
  justify-content: space-between;

  width: 32rem;
  height: 7.2rem;
  margin-top: 1.2rem;
  padding: 1.6rem 2.4rem;
  padding-right: 0.8rem;

  border-radius: 1.2rem;
  border: 0.1rem solid #e8eaed;
  background-color: #fbfcff;
`;

const StDetailBtn = styled.button``;

const StFirstWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StParty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.6rem;
  height: 2rem;

  border-radius: 0.4rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;

  color: #ff7f77;
  background-color: #ffeceb;

  &.leader {
    color: #589bff;
    background-color: #e8eafe;
  }
`;

const StPartyTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`;

const StVoteCnt = styled.p`
  margin-left: 5.5rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;

  color: #9ca3ad;
`;

const StAppoinmentInfo = styled.div``;
