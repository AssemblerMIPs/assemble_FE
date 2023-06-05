import axios from 'axios';
import { postSignup } from '../../lib/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTokenAndUserData = async () => {
      const token = await getKakaoToken();
      if (token) {
        await getKaKaoUserData();
        const userId = localStorage.getItem('userId');
        await postSignup(userId, userId, userId);
      }
      navigate('/home');
    };

    fetchTokenAndUserData();
  }, []);

  const getKakaoToken = async () => {
    const url = 'https://kauth.kakao.com/oauth/token';
    const params = {
      grant_type: 'authorization_code',
      client_id: import.meta.env.VITE_REST_API_KEY,
      redirect_uri: import.meta.env.VITE_REDIRECT_URL,
      code,
    };
    try {
      const response = await axios.post(url, null, {
        params,
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      localStorage.setItem('kakaoAccessToken', response.data.access_token);
      return response.data;
    } catch (e) {
      console.error(e);
    }
    return null;
  };

  const getKaKaoUserData = async () => {
    const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('kakaoAccessToken')}`,
      },
    });
    localStorage.setItem('userId', kakaoUser.data.properties.nickname);
    localStorage.setItem('userName', kakaoUser.data.properties.nickname);
    return kakaoUser;
  };
};

export default Auth;
