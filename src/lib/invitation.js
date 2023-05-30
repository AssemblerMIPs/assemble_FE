import { client } from './axios';

// 초대장 상세정보 조회
export const getInvitation = async (promiseId) => {
  try {
    console.log(promiseId);
    const { data } = await client.get(`/getInvitation?promiseId=${promiseId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 약속에 대한 응답
export const postResponse = async (promiseId, userId, isAttend) => {
  try {
    console.log(promiseId);
    const { data } = await client.get(`/response`, {
      promiseId: promiseId,
      userId: userId,
      isAttend: isAttend,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
