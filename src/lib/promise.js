import { client } from './axios';

// 사용자가 응답한 약속 리스트 조회
export const getPromiseByUserId = async (userId) => {
  try {
    const { data } = await client.get(`/promiseByUserId?userId=${userId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
