import React, { useEffect, useState } from 'react';
import { getPromiseByUserId, getPromiseResponseList } from '../../lib/promise';

import Header from '../common/Header';
import { IcRight } from '../../assets/icons';
import Nav from '../common/Nav';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Manage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [ownPromiseList, setOwnPromiseList] = useState([]);
  const [repliedPromiseList, setRepliedPromiseList] = useState([]);
  const [promiseList, setPromiseList] = useState([]);
  const [responseCount, setResponseCount] = useState({});

  const getPromiseList = async () => {
    const promises = await getPromiseByUserId(userId);
    setOwnPromiseList(promises.ownPromises);
    setRepliedPromiseList(promises.repliedPromises);

    const filteredPromises = repliedPromiseList.filter((item) => item.isAttend === 'true');
    const newArrayOfObjects = filteredPromises.map((item) => item.promise);

    setPromiseList([...ownPromiseList, ...newArrayOfObjects]);
  };

  const getResponse = async () => {
    const responseCounts = {};
    for (const promise of ownPromiseList) {
      const responses = await getPromiseResponseList(promise._id);
      responseCounts[promise._id] = responses.attendance.length;
    }
    for (const promise of repliedPromiseList) {
      const responses = await getPromiseResponseList(promise.promise._id);
      responseCounts[promise._id] = responses.attendance.length;
    }
    setResponseCount(responseCounts);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPromiseList();
      await getResponse();
    };
    fetchData();
  }, []);

  const [activeTab, setActiveTab] = useState('own');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StManage>
      <Header headerName='약속 관리' />

      <StTabs>
        <StTab active={activeTab === 'own'} onClick={() => handleTabClick('own')}>
          내가 만든 약속
        </StTab>
        <StTab active={activeTab === 'replied'} onClick={() => handleTabClick('replied')}>
          응답한 약속
        </StTab>
      </StTabs>

      <StAppointment>
        {activeTab === 'own' &&
          ownPromiseList.map((promise) => (
            <React.Fragment key={promise._id}>
              <StAppointmentInfo>
                <StAppointmentWrapper onClick={() => navigate(`/detail/${promise._id}`)}>
                  <StTitleWrapper>
                    <StParty className='leader'>파티장</StParty>
                    <StPartyTitle>{promise.promiseName}</StPartyTitle>
                  </StTitleWrapper>
                  <StDetailBtn type='button'>
                    <IcRight />
                  </StDetailBtn>
                </StAppointmentWrapper>
                <StVoteCnt>
                  {promise.userId} | {responseCount[promise._id]}명 응답완료
                </StVoteCnt>
              </StAppointmentInfo>
            </React.Fragment>
          ))}
        {activeTab === 'replied' &&
          repliedPromiseList.map((promise) => (
            <React.Fragment key={promise._id}>
              <StAppointmentInfo>
                <StAppointmentWrapper onClick={() => navigate(`/detail/${promise.promise._id}`)}>
                  <StTitleWrapper>
                    <StParty>파티원</StParty>
                    <StPartyTitle>{promise.promise.promiseName}</StPartyTitle>
                  </StTitleWrapper>
                  <StDetailBtn type='button'>
                    <IcRight />
                  </StDetailBtn>
                </StAppointmentWrapper>
                <StVoteCnt>
                  {promise.promise.userId} | {responseCount[promise._id]}명 응답완료
                </StVoteCnt>
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
  position: relative;
`;

const StTabs = styled.div`
  display: flex;
  padding-top: 2rem;
  background-color: white;
`;

const StTab = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#000000' : '#9ca3ad')};
  background-color: ${(props) => (props.active ? '#ffffff' : 'transparent')};
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? '#ffffff' : '#f2f2f2')};
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const StNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;

const StAppointment = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 1rem;
`;

const StDetailBtn = styled.button`
  & > svg {
    padding-top: 0.5rem;
  }
`;

const StAppointmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
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
  margin-bottom: 0.5rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

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

  &:last-child {
    margin-bottom: 10rem;
  }
`;
