import { IcX } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';

const Header = ({ headerName, isCloseBtn }) => {
  return (
    <StHeader>
      <h1>{headerName}</h1>
      {isCloseBtn && (
        <>
          <button type='button'>
            <IcX />
          </button>
        </>
      )}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;

  & > h1 {
    margin-top: 2.4rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 158%;
  }

  & > button > svg {
    position: absolute;

    top: 3rem;
    right: 1rem;
  }
`;
