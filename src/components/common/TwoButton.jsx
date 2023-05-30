import React from 'react';
import styled from 'styled-components';

const TwoButton = ({ leftBtn, rightBtn, handleClickLeft, handleClickRight }) => {
  return (
    <StButton>
      <button type='button' className='leftBtn' onClick={handleClickLeft}>
        {leftBtn}
      </button>
      <button type='button' className='rightBtn' onClick={handleClickRight}>
        {rightBtn}
      </button>
    </StButton>
  );
};

export default TwoButton;

const StButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32rem;

  position: fixed;
  bottom: 3.2rem;

  & > button {
    width: 15rem;
    height: 4.5rem;
    margin-top: 1.6rem;

    border: 0.1rem solid #589bff;
    border-radius: 1rem;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
  }

  & > .leftBtn {
    color: #589bff;
  }

  & > .rightBtn {
    background-color: #589bff;
    color: white;
  }
`;
