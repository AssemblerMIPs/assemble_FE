import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import { RecoilRoot } from 'recoil';
import SignupPage from './pages/SignupPage';
import { Suspense } from 'react';
import VotePage from './pages/VotePage';

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
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
