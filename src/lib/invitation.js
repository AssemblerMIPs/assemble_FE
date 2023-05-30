import { client } from './axios';

// 초대장 상세정보 조회
export const getInvitation = async (promiseId) => {
  try {
    const { data } = await client.get(`/getInvitation?promiseId=${promiseId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
