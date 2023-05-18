import { IcGoBack } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';

const OneButton = ({ btnName }) => {
  return (
    <StButton>
      <button type='button' className='goBack'>
        <IcGoBack />
      </button>
      <button type='button'>{btnName}</button>
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
