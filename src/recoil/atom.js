import { atom } from 'recoil';

const UserId = atom({
  key: 'userid',
  default: '',
});

const PromiseName = atom({
  key: 'promisename',
  default: '',
});

const PromiseStartDate = atom({
  key: 'promisestartdate',
  default: new Date(),
});

const PromiseEndDate = atom({
  key: 'promiseenddate',
  default: new Date(),
});

const PromiseDescrpt = atom({
  key: 'promisedescrpt',
  default: '',
});

const PromisePlace = atom({
  key: 'promiseplace',
  default: '',
});

const VoteOptions = atom({
  key: 'voteoptions',
  default: ['', ''],
});

export {
  PromiseName,
  PromiseDescrpt,
  PromiseStartDate,
  PromiseEndDate,
  PromisePlace,
  UserId,
  VoteOptions,
};
