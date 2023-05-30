import React, { useEffect, useState } from 'react';

import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import { IcRight } from '../../assets/icons';
import Nav from '../common/Nav';
import { getPromiseByUserId } from '../../lib/promise';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Manage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [promiseList, setPromiseList] = useState([]);

  const getPromiseList = async () => {
    const promises = await getPromiseByUserId(userId);
    setPromiseList(promises);
  };

  useEffect(() => {
    getPromiseList();
  }, []);

  return (
    <StManage>
      <Header headerName='약속 관리' />
      <AppointmentName name='내 약속 관리' />

      <StAppointment>
        {promiseList.map((promise) => (
          <React.Fragment key={promise._id}>
            <StAppointmentInfo>
              <StFirstWrapper>
                <StTitleWrapper>
                  <StParty className={promise.userId === userId ? 'leader' : ''}>파티장</StParty>
                  <StPartyTitle>{promise.promiseName}</StPartyTitle>
                </StTitleWrapper>
                <StDetailBtn type='button' onClick={() => navigate('/detail')}>
                  <IcRight />
                </StDetailBtn>
              </StFirstWrapper>
              <StVoteCnt>{promise.userId} | 2명 응답완료</StVoteCnt>
            </StAppointmentInfo>
          </React.Fragment>
        ))}
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
  flex-direction: column;
  justify-content: space-between;
`;

const StDetailBtn = styled.button``;

const StFirstWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StTitleWrapper = styled.div`
  display: flex;
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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;

  color: #9ca3ad;
`;

const StAppointmentInfo = styled.div`
  width: 100%;

  width: 32rem;
  height: fit-content;
  margin-top: 1.2rem;
  padding: 1rem 2.4rem;
  padding-right: 0.8rem;

  border-radius: 1.2rem;
  border: 0.1rem solid #e8eaed;
  background-color: #fbfcff;
`;
