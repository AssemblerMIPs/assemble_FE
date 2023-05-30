import { IcLine, IcMainIcon } from '../../assets/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DetailPromiseName } from '../../recoil/atom';
import Header from '../common/Header';
import Invitation from '../Invitation/Invitation';
import TwoButton from '../common/TwoButton';
import { getPromiseDetail } from '../../lib/promise';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const Detail = () => {
  const { promiseId } = useParams();
  const [promiseDetail, setPromiseDetail] = useState(null);
  const [detailPromiseName, setDetailPromiseName] = useRecoilState(DetailPromiseName);

  const navigate = useNavigate();

  const getPromiseDetailInfo = async () => {
    const detail = await getPromiseDetail(promiseId);
    setPromiseDetail(detail);
    setDetailPromiseName(detail.promiseName);
  };

  useEffect(() => {
    getPromiseDetailInfo();
  }, []);

  if (!promiseDetail) {
    return null;
  }

  const handleDutchpay = () => {
    navigate(`/dutchpay/${promiseId}`);
  };
  const handleComment = () => {
    navigate(`/comment/${promiseId}`);
  };

  return (
    <StInvitationWrapper>
      <Header headerName='약속 상세보기' isCloseBtn />
      <Invitation />
      <StVoteResultBtn
        type='button'
        onClick={() => {
          navigate(`/voteresult/${promiseId}`);
        }}
      >
        투표 결과
      </StVoteResultBtn>
      <StResponseBtn
        type='button'
        onClick={() => {
          navigate(`/response/${promiseId}`);
        }}
      >
        응답자 보기
      </StResponseBtn>
      <TwoButton
        leftBtn='더치페이'
        rightBtn='방명록 작성'
        handleClickLeft={handleDutchpay}
        handleClickRight={handleComment}
      />
    </StInvitationWrapper>
  );
};

export default Detail;

const StInvitationWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 2.1rem;

  & > h1 {
    margin-top: 2.4rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 158%;
  }
`;

const StVoteResultBtn = styled.button`
  position: absolute;
  top: 33.5rem;
  right: 4rem;

  width: fit-content;
  height: 2.5rem;

  border: 0.1rem solid #589bff;
  border-radius: 0.7rem;
  color: #589bff;
`;
const StResponseBtn = styled.button`
  position: absolute;
  top: 39.2rem;
  right: 4rem;

  width: fit-content;
  height: 2.5rem;

  border: 0.1rem solid #589bff;
  border-radius: 0.7rem;
  color: #589bff;
`;
