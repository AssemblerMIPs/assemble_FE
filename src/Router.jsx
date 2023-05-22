import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PromisePage from "./pages/PromisePage";
import PromiseInfoPage from "./pages/PromiseInfoPage";
import VoteCreatePage from "./pages/VoteCreatePage";
import VoteCreateSucPage from "./pages/VoteCreateSucPage";
import { RecoilRoot } from "recoil";
import SignupPage from "./pages/SignupPage";
import { Suspense } from "react";
import InviteCodePage from "./pages/InviteCodePage";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/promise" element={<PromisePage />} />
            <Route path="/promise/info" element={<PromiseInfoPage />} />
            <Route path="/promise/vote" element={<VoteCreatePage />} />
            <Route
              path="/promise/votesuccess"
              element={<VoteCreateSucPage />}
            />
            <Route path="/invite" element={<InviteCodePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
