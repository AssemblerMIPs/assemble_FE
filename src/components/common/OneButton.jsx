import { IcGoBack } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OneButton = ({ btnName, handleClick }) => {
  const navigate = useNavigate();
  return (
    <StButton>
      <button
        type='button'
        className='goBack'
        onClick={() => {
          navigate(-1);
        }}
      >
        <IcGoBack />
      </button>
      <button type='button' onClick={handleClick}>
        {btnName}
      </button>
    </StButton>
  );
};

export default OneButton;

const StButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  position: fixed;
  bottom: 3.2rem;

  & > button {
    width: 26.6rem;
    height: 5.2rem;

    border-radius: 1rem;
    background-color: #589bff;
    color: white;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }

  & > .goBack {
    width: 5.2rem;
    height: 5.2rem;

    background-color: #e8eaed;
  }
`;
