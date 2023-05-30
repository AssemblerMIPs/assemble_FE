import CopyToClipboard from 'react-copy-to-clipboard';
import { InvitePic } from '../../assets/icons';
import { PromiseId } from '../../recoil/atom';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const Invite = () => {
  const [promiseId, setPromiseId] = useRecoilState(PromiseId);

  const navigatePage = useNavigate();
  return (
    <div>
      <Container>
        <span>
          이제 약속을 <span>공유</span>하세요!
        </span>
        <h2>최대 10명까지 응답가능</h2>
        <h3>*본인포함</h3>
        <StImgWrapper>
          <InvitePic />
        </StImgWrapper>
        <StCopyLink>
          <p>{`https://assemble-fe.vercel.app/invitation/${promiseId}`}</p>
          <>
            <CopyToClipboard
              text={`https://assemble-fe.vercel.app/invitation/${promiseId}`}
              onCopy={() => alert('주소가 복사되었습니다')}
            >
              <button>복사</button>
            </CopyToClipboard>
          </>
        </StCopyLink>
        <Button
          onClick={() => {
            navigatePage('/home');
          }}
        >
          홈으로 가기
        </Button>
      </Container>
    </div>
  );
};

export default Invite;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-top: 7rem;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: white;

  & > span {
    color: black;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 2rem;
    line-height: 148%;

    & > span {
      color: #6871ee;
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 2rem;
      line-height: 148%;
    }
  }
  & > h2 {
    color: black;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 148%;
  }
  & > h3 {
    color: black;
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 148%;
  }
`;
const StCopyLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 35.5rem;
  height: fit-content;
  position: relative;
  margin-top: 2rem;

  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.5;
  border: 0.1rem solid lightgray;
  border-color: #589bff;

  & > p {
    width: 80%;
    word-break: break-word;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1.4rem;
  }
  & > button {
    border: 0rem;
    background-color: white;
    color: #589bff;
    font-family: 'Pretendard';
    font-weight: 600;
  }
`;
const Button = styled.button`
  position: fixed;
  bottom: 3.2rem;

  width: 100%;
  max-width: 39rem;
  height: 4.5rem;
  margin-top: 2rem;

  padding: 0.6rem 1.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.5;
  border: 0.1rem solid lightgray;
  border-color: #589bff;
  color: white;
  background: #589bff;
`;

const StImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 6rem 0rem;
`;
