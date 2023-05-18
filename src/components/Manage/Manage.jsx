import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import Nav from '../common/Nav';
import React from 'react';
import styled from 'styled-components';

const Manage = () => {
  return (
    <StManage>
      <Header headerName='약속 관리' />
      <AppointmentName name='내 약속 관리' />
      <StNavWrapper>
        <Nav />
      </StNavWrapper>
    </StManage>
  );
};

export default Manage;

const StManage = styled.section``;

const StNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;
