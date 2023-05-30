import { useNavigate, useParams } from 'react-router-dom';

import Header from '../common/Header';
import Invitation from './Invitation';
import React from 'react';
import TwoButton from '../common/TwoButton';
import styled from 'styled-components';

const InvitationWrapper = () => {
  const { promiseId } = useParams();
  const userId = localStorage.getItem('userId');

  const navigate = useNavigate();

  const handleReject = async () => {
    if (!userId) {
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      navigate(`/login?promiseId=${promiseId}`);
      return;
    }
    await postResponse(promiseId, userId, false);
    navigate('/invitation/result?isAttend=false');
  };

  const handleApprove = async () => {
    if (!userId) {
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      navigate(`/login?promiseId=${promiseId}`);
      return;
    }
    await postResponse(promiseId, userId, true);
    navigate('/invitation/result?isAttend=true');
  };

  return (
    <StInvitationWrapper>
      <Header headerName='초대장' />
      <Invitation />
      <TwoButton
        leftBtn='거절하기'
        rightBtn='수락하기'
        handleClickLeft={handleReject}
        handleClickRight={handleApprove}
      />
    </StInvitationWrapper>
  );
};

export default InvitationWrapper;

const StInvitationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
