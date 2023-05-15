import React from 'react';
import styled from 'styled-components';

import Nav from '../components/Home/Nav';
import Button from '../components/common/Button';

import { IcLeftSmall } from '../assets/icons';

const HomePage = () => {
  return (
    <>
      <Nav />
      <Button />
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
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey500};
    ${({ theme }) => theme.fonts.Title3};
  `,
};
