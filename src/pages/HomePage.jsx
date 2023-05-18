import { IcLeftSmall } from '../assets/icons';
import Nav from '../components/Home/Nav';
import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <Nav />
      <St.Wrapper>
        <IcLeftSmall />
        Assemble 선영 현지 효승
      </St.Wrapper>
    </>
  );
};

export default HomePage;

const St = {
  Wrapper: styled.article`
    background-color: ${({ theme }) => theme.colors.Grey200};
  `,
};
