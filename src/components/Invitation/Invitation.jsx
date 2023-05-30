import { IcLine, IcMainIcon } from '../../assets/icons';
import { getInvitation, postResponse } from '../../lib/invitation';
import { useEffect, useState } from 'react';

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Invitation = () => {
  const { promiseId } = useParams();
  const [invitationInfo, setInvitationInfo] = useState(null);

  const getInvitationInfo = async () => {
    const res = await getInvitation(promiseId);
    setInvitationInfo(res);
  };

  useEffect(() => {
    getInvitationInfo();
  }, []);

  if (!invitationInfo) {
    return null;
  }

  const formatDate = (dateTimeString) => {
    const dateTimeParts = dateTimeString.split('T');
    const dateParts = dateTimeParts[0].split('-');
    const timeParts = dateTimeParts[1].split(':');

    const year = dateParts[0];
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);

    const period = hour < 12 ? '오전' : '오후';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    return `${month}월 ${day}일 ${period} ${formattedHour}시 ${minute}분`;
  };

  return (
    <StInvitationWrapper>
      <StInvitation>
        <IcMainIcon />
        <h2>{invitationInfo.promise.promiseName}</h2>
        <p>{invitationInfo.promise.promiseDescription}</p>
        <div>
          <IcLine />
        </div>
        <StContent>
          <h3>날짜/시간</h3>
          <p>{formatDate(invitationInfo.promise.promiseStartDate)}</p>
          <h3>장소</h3>
          <p>
            {invitationInfo.promise.promisePlace
              ? invitationInfo.promise.promisePlace
              : '투표 진행 중'}
          </p>
          <h3>참여자</h3>
          <StAttendeeList>
            {!invitationInfo.attendance.length
              ? '현재 참여자 없음'
              : invitationInfo.attendance.map((attendee) => (
                  <span key={attendee.userId}>{attendee.userId}</span>
                ))}
          </StAttendeeList>
        </StContent>
      </StInvitation>
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
    font-size: 1.4rem;
    line-height: 146%;
  }
`;

const StAttendeeList = styled.p`
  & > * {
    margin-bottom: 1.6rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 146%;
  }

  & > span:not(:last-child)::after {
    content: ', ';
  }
`;
