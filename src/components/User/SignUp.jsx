import { IcGreyLine, IcLogo, IcSimpleLogo } from '../../assets/icons';
import { getAllUserInfo, postSignup } from '../../lib/auth';

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);

  const navigate = useNavigate();

  const handleDuplicationCheck = async () => {
    const allUserInfo = await getAllUserInfo();
    const isUserIdExists = allUserInfo.some((userInfo) => userInfo.userId === userId);

    if (isUserIdExists) {
      alert('중복된 아이디입니다. 다시 시도하세요.');
      setIsIdChecked(false);
    } else {
      alert('사용 가능한 아이디입니다.');
      setIsIdChecked(true);
    }
  };

  const onSignUp = async () => {
    if (!isIdChecked) {
      alert('ID 중복체크를 진행해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다. 다시 시도하세요.');
    } else {
      await postSignup(userId, password, userId);
      localStorage.setItem('userId', userId);
      navigate('/home');
    }
  };

  return (
    <>
      <Container>
        <IcLogo />
        <Form>
          <IcSimpleLogo />
          <h1>회원가입</h1>
          <div>
            <IcGreyLine className='line' />
          </div>
          <div className='id'>
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder='아이디를 입력해주세요.'
            />
            <button onClick={handleDuplicationCheck}>중복체크</button>
          </div>
          <Input
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='비밀번호를 입력해주세요.'
          />
          <Input
            type={'password'}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder='비밀번호를 한 번 더 입력해주세요.'
          />
          <p>{passwordConfirmMessage}</p>
        </Form>
        <Button onClick={onSignUp}>회원가입</Button>
      </Container>
    </>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.Blue};

  & > svg {
    position: relative;
  }
`;

const Form = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 32rem;
  height: 28.1rem;
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
  & > .id {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 30rem;
    height: 4.6rem;
    position: relative;
    align-items: center;
    margin-bottom: 0.5rem;

    border: 0.1rem solid #589bff;
    border-radius: 0.8rem;

    & > input {
      height: 4rem;
      position: relative;
      align-items: center;

      border: 0rem;
    }

    & > button {
      height: 3rem;

      border: 0rem;
      border-radius: 0.5rem;
    }
  }

  & > Input {
    margin-top: 1.4rem;
    padding-left: 2rem;
  }

  & > p {
    color: #ff0000;
    font-family: 'Pretendard';
    font-style: normal;
    font-size: 1.2rem;
    line-height: 150%;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 27.3rem;
  height: 4.6rem;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;

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
