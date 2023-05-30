import { IcGoBack } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OneButton = ({ btnName, handleClick, disabled }) => {
  const navigate = useNavigate();
  return (
    <StButton disabled={disabled}>
      <button
        type='button'
        className='goBack'
        onClick={() => {
          navigate(-1);
        }}
      >
        <IcGoBack />
      </button>
      <button type='button' onClick={handleClick} disabled={disabled}>
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

  width: 100%;
  max-width: 39rem;

  position: fixed;
  bottom: 3.2rem;

  & > button {
    width: 100%;
    height: 5.2rem;

    border-radius: 1rem;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#589bff')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

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
