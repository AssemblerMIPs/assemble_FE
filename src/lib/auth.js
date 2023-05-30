import { client } from './axios';

// 로그인
export const postLogin = async (userId, password) => {
  console.log(userId, password);
  try {
    const res = await client.post(`/login`, {
      userId: userId,
      password: password,
    });
    return res;
  } catch (err) {
    alert('아이디 또는 비밀번호를 잘못 입력하셨습니다');
    console.error(err);
  }
};

// 회원가입
export const postSignup = async (userId, password, userName) => {
  try {
    const { data } = await client.post(`/signup`, {
      userId: userId,
      password: password,
      userName: userName,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 닉네임 수정
export const postUpDateUserName = async (userId, userName) => {
  try {
    const { data } = await client.post(`/upDateUserName`, {
      userId: userId,
      userName: userName,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 사용자 정보 조회
export const getUserInfo = async (userId) => {
  try {
    const { data } = await client.get(`/getUserById?userId=${userId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 모든 사용자 정보 조회 (아이디 중복검사)
export const getAllUserInfo = async () => {
  try {
    const { data } = await client.get(`/getUsers`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
