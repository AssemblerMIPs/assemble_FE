import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CommentPage from './pages/CommentPage';
import CreateSuccessPage from './pages/CreateSuccess';
import DetailPage from './pages/DetailPage';
import DutchPayPage from './pages/DutchPayPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import InviteCodePage from './pages/InviteCodePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ManagePage from './pages/ManagePage';
import PromiseInfoPage from './pages/PromiseInfoPage';
import PromisePage from './pages/PromisePage';
import { RecoilRoot } from 'recoil';
import ResponseListPage from './pages/ResponseListPage';
import ResultPage from './pages/ResultPage';
import SignupPage from './pages/SignupPage';
import { Suspense } from 'react';
import VoteCreatePage from './pages/VoteCreatePage';
import VoteCreateSucPage from './pages/VoteCreateSucPage';
import VotePage from './pages/VotePage';
import VoteResultPage from './pages/VoteResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/invitation/:promiseId' element={<InvitationPage />} />
            <Route path='/vote' element={<VotePage />} />
            <Route path='/vote/result' element={<ResultPage />} />
            <Route path='/manage' element={<ManagePage />} />
            <Route path='/detail/:promiseId' element={<DetailPage />} />
            <Route path='/voteresult/:promiseId' element={<VoteResultPage />} />
            <Route path='/response/:promiseId' element={<ResponseListPage />} />
            <Route path='/comment/:promiseId' element={<CommentPage />} />
            <Route path='/dutchpay/:promiseId' element={<DutchPayPage />} />
            <Route path='/promise' element={<PromisePage />} />
            <Route path='/promise/info' element={<PromiseInfoPage />} />
            <Route path='/promise/vote' element={<VoteCreatePage />} />
            <Route path='/promise/votesuccess' element={<VoteCreateSucPage />} />
            <Route path='/promise/createsuccess' element={<CreateSuccessPage />} />
            <Route path='/invite' element={<InviteCodePage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
