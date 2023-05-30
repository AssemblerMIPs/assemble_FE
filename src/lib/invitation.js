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
    const { data } = await client.post(`/response`, {
      promiseId: promiseId,
      userId: userId,
      isAttend: isAttend,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 더치페이 금액 업데이트
export const postUpdateDutch = async (promiseId, totalPrice) => {
  try {
    const { data } = await client.post(`/updateDutch`, {
      promiseId: promiseId,
      totalPrice: totalPrice,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
