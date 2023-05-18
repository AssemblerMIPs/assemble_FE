import { IcLeftSmall } from '../assets/icons';
import Nav from '../components/common/Nav';
import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <St.Wrapper>
        <IcLeftSmall />
        Assemble 선영 현지 효승
      </St.Wrapper>
      <Nav />
    </>
  );
};

export default HomePage;

const St = {
  Wrapper: styled.article`
    background-color: ${({ theme }) => theme.colors.Grey200};
  `,
};
