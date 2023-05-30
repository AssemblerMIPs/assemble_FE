import React, { useEffect, useState } from 'react';

import AppointmentName from '../common/AppointmentName';
import { DetailPromiseName } from '../../recoil/atom';
import Header from '../common/Header';
import { getPromiseResponseList } from '../../lib/promise';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const ResponseResult = () => {
  const { promiseId } = useParams();
  const [detailPromiseName, setDetailPromiseName] = useRecoilState(DetailPromiseName);
  const [responseList, setResponseList] = useState([]);

  const getResponseList = async (promiseId) => {
    const res = await getPromiseResponseList(promiseId);
    setResponseList(res.attendance);
  };

  useEffect(() => {
    getResponseList(promiseId);
  }, []);
  return (
    <StVoteResultWrapper>
      <Header headerName='응답자 목록' isCloseBtn />
      <AppointmentName name={detailPromiseName} />

      <StResponseInfo>
        <p>전체 {responseList.length}명</p>
        <div>
          <p>수락 ({responseList.filter((res) => res.isAttend === 'true').length})</p>
          <p> | </p>
          <p>거절 ({responseList.filter((res) => res.isAttend === 'false').length})</p>
        </div>
      </StResponseInfo>

      <StResultWrapper>
        <StResult>
          {responseList.map((res, index) => (
            <StResponse key={index} isRejected={res.isAttend === 'false'}>
              {res.userId}
              <span>{res.isAttend === 'true' ? '수락' : '거절'}</span>
            </StResponse>
          ))}
        </StResult>
      </StResultWrapper>
    </StVoteResultWrapper>
  );
};

export default ResponseResult;

const StVoteResultWrapper = styled.div`
  padding: 2rem 2.3rem;

  & > p {
    margin-top: 1.9rem;

    color: #589bff;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    text-align: right;
  }
`;

const StResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StResult = styled.div``;

const StResponse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 28rem;
  height: 4.5rem;
  padding: 1.2rem 2.1rem;
  margin-bottom: 0.7rem;

  border: 0.1rem solid ${({ isRejected }) => (isRejected ? '#cdd2d9' : '#589BFF')};

  border-radius: 1rem;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 148%;

  & > span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;

    color: ${({ isRejected }) => (isRejected ? '#9ca3ad' : '#589BFF')};
  }
`;

const StResponseInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.9rem 0rem;
  padding: 0 3rem;

  & > p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #589bff;
  }

  & > div {
    display: flex;

    & > p {
      margin-left: 0.5rem;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
    }
    & > p:last-child {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 150%;
      color: #c4c4c4;
    }
  }
`;
