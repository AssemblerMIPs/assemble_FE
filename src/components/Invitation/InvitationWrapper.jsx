import { DetailPromiseName, VoteId } from '../../recoil/atom';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../common/Header';
import Invitation from './Invitation';
import TwoButton from '../common/TwoButton';
import { getInvitation } from '../../lib/invitation';
import { getVoteInfo } from '../../lib/promise';
import { postResponse } from '../../lib/invitation';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const InvitationWrapper = () => {
  const { promiseId } = useParams();
  const userId = localStorage.getItem('userId');
  const [voteId, setVoteId] = useRecoilState(VoteId);
  const [invitationInfo, setInvitationInfo] = useState(null);
  const [detailPromiseName, setDetailPromiseName] = useRecoilState(DetailPromiseName);

  const navigate = useNavigate();

  const getVoteId = async () => {
    const res = await getVoteInfo(promiseId);
    console.log(res.voteInfo[0]._id);
    setVoteId(res.voteInfo[0]._id);
  };

  const getInvitationInfo = async () => {
    const res = await getInvitation(promiseId);
    console.log(res);
    setInvitationInfo(res);
    setDetailPromiseName(res.promise.promiseName);

    if (!res.promise.promisePlace) {
      getVoteId(promiseId);
    }
  };

  useEffect(() => {
    getInvitationInfo();
  }, []);

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

    voteId ? navigate(`/vote/${promiseId}`) : navigate('/invitation/result?isAttend=true');

    // await postResponse(promiseId, userId, true);
    // navigate('/invitation/result?isAttend=true');
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
