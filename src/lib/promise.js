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

// 약속 잡기
export const postPromise = async (
  promiseName,
  promiseStartDate,
  promiseEndDate,
  promiseDescription,
  promisePlace,
) => {
  try {
    const userId = localStorage.getItem('userId');

    const { data } = await client.post('/promise', {
      promiseName: promiseName,
      promiseStartDate: promiseStartDate,
      promiseEndDate: promiseEndDate,
      promiseDescription: promiseDescription,
      promisePlace: promisePlace,
      userId: userId,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 투표 생성
export const postCreateVote = async (voteName, promiseId, options) => {
  try {
    console.log(voteName, promiseId, options);
    const { data } = await client.post('/createVote', {
      voteName: voteName,
      promiseId: promiseId,
      options: options,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
