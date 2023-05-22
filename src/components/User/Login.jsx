import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { dispatch } from "react";
import { IcLogo, IcGreyLine, IcSimpleLogo } from "../../assets/icons";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    //입력 값 정합성 체크 후 login API 요청
    if (userId === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    dispatch(userActions.loginDB(userId, password));
  };

  const loginDB = (userId, password) => {
    return function (dispatch, getState, { history }) {
      axios({
        method: "post",
        url: "http://localhost:1111/login",
        data: {
          userId: userId,
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          dispatch(
            setUser({
              userId: res.data.userId,
            })
          );
          const accessToken = res.data.token;
          //쿠키에 토큰 저장
          setCookie("is_login", `${accessToken}`);
          document.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  const onLogin = () => {
    console.log(userId, password);
    //   axios.post("http://localhost:1111/signup", {
    //     userId: userId,
    //     password: password,
    //   });
  };

  return (
    <>
      <Container>
        <IcLogo />
        <Form>
          <IcSimpleLogo />
          <h1>로그인</h1>
          <div>
            <IcGreyLine className="line" />
          </div>
          <Input
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            value={userId}
            placeholder="아이디를 입력해주세요."
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="비밀번호를 입력해주세요."
          />
        </Form>
        <Button onClick={Login}>로그인</Button>
        <p className="quest">혹시 아직 회원이 아니신가요?</p>
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
    font-family: "Pretendard";
    font-style: bold;
    font-size: 1.2rem;
    line-height: 148%;
    text-align: center;
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
    font-family: "Pretendard";
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
  font-family: "Pretendard";
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
