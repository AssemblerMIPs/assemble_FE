import Invitation from '../components/Invitation/Invitation';
import React from 'react';
import { getInvitation } from '../lib/invitation';

const InvitationPage = () => {
  console.log(getInvitation(1));
  return (
    <>
      <Invitation />;
    </>
  );
};

export default InvitationPage;
