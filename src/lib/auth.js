import { client } from './axios';

// 로그인
export const postLogin = async (userId, password) => {
  try {
    const res = await client.post(`/login`, {
      userId: userId,
      password: password,
    });
    return res;
  } catch (err) {
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
