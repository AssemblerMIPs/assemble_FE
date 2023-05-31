import axios from 'axios';
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
      console.log(response.data);
      localStorage.setItem('kakaoAccessToken', response.data.access_token);
      return response.data;
    } catch (e) {
      console.error(e);
    }
    return null;
  };

  const getKaKaoUserData = async () => {
    console.log(localStorage.getItem('kakaoAccessToken'));
    const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('kakaoAccessToken')}`,
      },
    });
    console.log(kakaoUser.data.properties.nickname);
    localStorage.setItem('userId', kakaoUser.data.properties.nickname);
    localStorage.setItem('userName', kakaoUser.data.properties.nickname);
    return kakaoUser;
  };
};

export default Auth;
