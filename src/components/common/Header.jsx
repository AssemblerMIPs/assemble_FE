import React from 'react';
import styled from 'styled-components';

const Header = ({ headerName }) => {
  return (
    <StHeader>
      <h1>{headerName}</h1>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin-top: 2.4rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 158%;
  }
`;
