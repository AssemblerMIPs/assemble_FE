import React from "react";
import styled from "styled-components";
import { IcLogo, IcGreyLine, IcSimpleLogo } from "../../assets/icons";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const duplicationCheckAPI = async (userId) => {
    let return_value;
    await axios
      .post("http://localhost:1111/signup", {
        userId: userId,
      })
      .then((res) => {
        return_value = res.data;
      })
      .catch(function (error) {
        console.log(error);
        return_value = true;
      });
    return return_value;
  };

  const duplicationCheck = (e) => {
    const currentid = e.target.value;
    setUserId(currentid);
    duplicationCheckAPI(currentid).then((res) => {
      console.log(res);
      if (res === false) {
        alert("사용 가능한 아이디입니다.");
        setIsId(res);
      } else {
        alert("중복된 아이디입니다. 다시 시도하세요.");
        setIsId(res);
        setUserId("");
      }
      console.log("중복체크");
    });
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    setIsPassword(true);
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onSignUp = () => {
    //console.log(userId, password);
    axios.post("http://localhost:1111/signup", {
      userId: userId,
      password: password,
      userName: userId,
    });
  };

  return (
    <>
      <Container>
        <IcLogo />
        <Form>
          <IcSimpleLogo />
          <h1>회원가입</h1>
          <div>
            <IcGreyLine className="line" />
          </div>
          <div className="id">
            <input placeholder="아이디를 입력해주세요." />
            <button onClick={duplicationCheck}>중복체크</button>
          </div>

          <Input
            type={"password"}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요."
          />
          <Input
            type={"password"}
            placeholder="비밀번호를 한 번 더 입력해주세요."
            onChange={onChangePasswordConfirm}
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

  border-radius: 2rem;
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
  & > .id {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 27.3rem;
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
  }

  & > p {
    color: #ff0000;
    font-family: "Pretendard";
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
