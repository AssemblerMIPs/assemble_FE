import { client } from './axios';

// 초대장 조회
export const getInvitation = async (promiseId) => {
  try {
    const { data } = await client.get(`/getInvitation/${promiseId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
