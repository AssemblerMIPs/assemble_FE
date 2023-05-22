import React from "react";
import styled from "styled-components";
import { IcLogo } from "../assets/icons";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigatePage = useNavigate();
  return (
    <>
      <Container>
        <IcLogo />
        <Button
          onClick={() => {
            navigatePage("/login");
          }}
        >
          Assemble 시작하기
        </Button>
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.Blue};

  & > svg {
    position: relative;
  }
`;
const Button = styled.button`
  width: 32.4rem;
  height: 4.5rem;
  position: fixed;
  bottom: 3.5rem;

  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  line-height: 148%;
  border: 0.1rem solid #ffffff;
  color: #589bff;
  background-color: white;
`;
