import { React, useEffect, useState } from 'react';
import { getCommentList, postComment } from '../../lib/invitation';
import { useNavigate, useParams } from 'react-router-dom';

import AppointmentName from '../common/AppointmentName';
import { DetailPromiseName } from '../../recoil/atom';
import Header from '../common/Header';
import { IcHome } from '../../assets/icons';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const Comment = () => {
  const { promiseId } = useParams();
  const [detailPromiseName, setDetailPromiseName] = useRecoilState(DetailPromiseName);

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment('');
  };

  const getComment = async () => {
    const comments = await getCommentList(promiseId);
    setCommentList(comments);
  };

  const createComment = async () => {
    await postComment(promiseId, comment);
    window.location.reload();
  };

  const handleComment = () => {
    createComment();
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <StCommentWrapper>
      <Header headerName='방명록' isCloseBtn />
      <StHomeBtn
        type='button'
        onClick={() => {
          navigate('/home');
        }}
      >
        <IcHome />
      </StHomeBtn>
      <AppointmentName name={detailPromiseName} />
      <StResultWrapper>
        <StResult>
          {commentList.map((comment, index) => (
            <div key={index}>
              <span>{comment.user}</span>
              <p>{comment.comment}</p>
            </div>
          ))}
        </StResult>
      </StResultWrapper>
      <StComment>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={comment}
            onChange={handleInputChange}
            placeholder='약속 후기를 남겨주세요'
          />
          <button type='submit' onClick={handleComment}>
            전송
          </button>
        </form>
      </StComment>
    </StCommentWrapper>
  );
};

export default Comment;

const StHomeBtn = styled.button`
  position: absolute;
  top: 2rem;
  left: 3.4rem;
  z-index: 10;

  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.Grey300};

  border-radius: 1rem;
`;

const StCommentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 2.4rem;
`;

const StResult = styled.div`
  & > div {
    display: flex;
    align-items: center;

    width: 28rem;
    height: 4.5rem;
    padding: 1.2rem 2.1rem;
    margin-bottom: 0.7rem;

    border: 0.1rem solid #589bff;
    border-radius: 1rem;

    & > span {
      width: 7rem;

      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 148%;
    }

    & > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 148%;
      color: #5e5e5e;
    }
  }
`;

const StComment = styled.div`
  position: fixed;
  bottom: 4.1rem;

  & > form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 32.4rem;

    border: 0.1rem solid #589bff;
    border-radius: 1rem;

    & > input {
      border: none;
      padding: 1.2rem;
      margin-left: 0.3rem;
      outline: none;
      font-size: 1.6rem;
    }

    & > button {
      width: 5rem;
      height: 5rem;

      color: white;
      background-color: #589bff;
      border-radius: 0 1rem 1rem 0;
    }
  }
`;
