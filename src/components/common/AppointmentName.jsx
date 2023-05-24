import { IcBlueLine } from '../../assets/icons';
import React from 'react';
import styled from 'styled-components';

const AppointmentName = ({ name }) => {
  return (
    <StNameWrapper>
      <h2>{name}</h2>
      <IcBlueLine />
    </StNameWrapper>
  );
};

export default AppointmentName;

const StNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    margin-top: 2rem;
    color: #589bff;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 148%;
  }

  & > svg {
    margin-top: 0.8rem;
  }
`;
