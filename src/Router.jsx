import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CommentPage from './pages/CommentPage';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ManagePage from './pages/ManagePage';
import { RecoilRoot } from 'recoil';
import ResponseListPage from './pages/ResponseListPage';
import ResultPage from './pages/ResultPage';
import SignupPage from './pages/SignupPage';
import { Suspense } from 'react';
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
            <Route path='/invitation' element={<InvitationPage />} />
            <Route path='/vote' element={<VotePage />} />
            <Route path='/vote/result' element={<ResultPage />} />
            <Route path='/voteresult' element={<VoteResultPage />} />
            <Route path='/manage' element={<ManagePage />} />
            <Route path='/detail' element={<DetailPage />} />
            <Route path='/response' element={<ResponseListPage />} />
            <Route path='/comment' element={<CommentPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
