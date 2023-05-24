import React from "react";
import styled from "styled-components";
import Home from "../components/Home/home";

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;

const St = {
  Wrapper: styled.article`
    background-color: ${({ theme }) => theme.colors.Grey200};
  `,
};
