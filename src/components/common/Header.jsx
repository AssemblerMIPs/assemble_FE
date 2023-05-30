import { IcX } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = ({ headerName, isCloseBtn }) => {
  const navigate = useNavigate();
  return (
    <StHeader>
      <h1>{headerName}</h1>
      {isCloseBtn && (
        <>
          <button
            type='button'
            onClick={() => {
              navigate(-1);
            }}
          >
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
  position: sticky;
  top: 0;
  z-index: 1;

  width: 100%;
  background-color: white;

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
