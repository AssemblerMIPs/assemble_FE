import { IcGreyLine, IcLogo, IcSimpleLogo } from '../../assets/icons';
import { getUserInfo, postLogin } from '../../lib/auth';

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

const Login = () => {
  const navigatePage = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(userId, password);
      const res = await postLogin(userId, password);
      if (res.status === 200) {
        const userInfo = await getUserInfo(userId);
        localStorage.setItem('userId', userInfo.userId);
        localStorage.setItem('userName', userInfo.userName);
        navigatePage('/home');
      }
    } catch (error) {
      console.log('로그인 실패:', error);
    }
  };

  return (
    <>
      <Container>
        <IcLogo />
        <Form>
          <IcSimpleLogo />
          <h1>로그인</h1>
          <div>
            <IcGreyLine className='line' />
          </div>
          <Input
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            value={userId}
            placeholder='아이디를 입력해주세요.'
          />
          <Input
            type={'password'}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder='비밀번호를 입력해주세요.'
          />
        </Form>
        <Button onClick={handleLogin}>로그인</Button>
        <p
          className='quest'
          onClick={() => {
            navigatePage('/signup');
          }}
        >
          혹시 아직 회원이 아니신가요?
        </p>
      </Container>
    </>
  );
};

export default Login;

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

  & > .quest {
    position: fixed;
    bottom: 8rem;

    color: white;
    font-family: 'Pretendard';
    font-style: bold;
    font-size: 1.2rem;
    line-height: 148%;
    text-align: center;

    cursor: pointer;
  }
`;

const Form = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 32rem;
  height: 27.1rem;
  margin-top: 5rem;

  border: 0.1rem solid #ffffff;
  border-radius: 1.2rem;
  background-color: white;

  & > svg {
    position: absolute;
    top: -4rem;
    text-align: center;

    width: 6.4rem;
    height: 6.4rem;
  }

  & > h1 {
    margin-top: 3.1rem;

    color: #589bff;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }

  & > .line {
    position: relative;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    width: 27.3rem;
    height: 0.1rem;
  }

  & > Input {
    margin-top: 1.4rem;
  }
`;

const Input = styled.input`
  width: 27.3rem;
  height: 4.6rem;
  position: relative;
  align-items: center;

  border: 0.1rem solid #589bff;
  border-radius: 0.8rem;

  color: black;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 1.4rem;
  line-height: 148%;
  text-align: left;
`;

const Button = styled.button`
  width: 32.4rem;
  height: 4.5rem;
  position: relative;
  margin-top: 3rem;

  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  line-height: 148%;
  border: 0.1rem solid #ffffff;
  color: #589bff;
  background-color: white;
`;
