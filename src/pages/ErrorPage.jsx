import { IcError } from '../assets/icons';
import React from 'react';
import { styled } from 'styled-components';

const ErrorPage = () => {
  return (
    <StError>
      <IcError />
    </StError>
  );
};

export default ErrorPage;
const StError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.Blue};
`;
