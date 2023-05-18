import AppointmentName from '../common/AppointmentName';
import Header from '../common/Header';
import React from 'react';

const VoteResult = () => {
  return (
    <div>
      <Header headerName='투표 결과' isCloseBtn />
      <AppointmentName name='담주에 돼지파티 할사람' />
    </div>
  );
};

export default VoteResult;
