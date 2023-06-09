import { client } from './axios';

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

    return data.savedPromise;
  } catch (err) {
    console.error(err);
  }
};

// 투표 생성
export const postCreateVote = async (voteName, promiseId, options) => {
  try {
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

// 투표하기
export const postVoting = async (voteId, votedOption) => {
  try {
    const userId = localStorage.getItem('userId');

    const { data } = await client.post('/voting', {
      voteId: voteId,
      userId: userId,
      votedOption: votedOption,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 홈 - 사용자가 응답한 약속 리스트 조회
export const getPromiseListByUserId = async (userId) => {
  try {
    const { data } = await client.get(`/promiseListByUserId?userId=${userId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 약속관리 - 사용자가 응답한 약속 리스트 조회
export const getPromiseByUserId = async (userId) => {
  try {
    const { data } = await client.get(`/promiseByUserId?userId=${userId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 약속 상세정보 조회
export const getPromiseDetail = async (promiseId) => {
  try {
    const { data } = await client.get(`/getPromiseById?promiseId=${promiseId}`);
    return data[0];
  } catch (err) {
    console.error(err);
  }
};

// 약속에 응답한 사람 리스트 조회
export const getPromiseResponseList = async (promiseId) => {
  try {
    const { data } = await client.get(`/promising?promiseId=${promiseId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 약속에 존재하는 투표 정보 조회
export const getVoteInfo = async (promiseId) => {
  try {
    const { data } = await client.get(`/getVoteByPromiseId?promiseId=${promiseId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
