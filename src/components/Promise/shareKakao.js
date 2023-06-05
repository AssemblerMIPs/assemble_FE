// import initialize from '../common/initialize';

const initialize = () => {
  if (!window.Kakao || !window.Kakao.isInitialized()) {
    window.Kakao && window.Kakao.init(import.meta.env.VITE_JS_KEY);
  }
  return window.Kakao; // Kakao 객체 반환
};

export const shareKakao = (route, title) => {
  const Kakao = initialize();
  if (Kakao) {
    console.log(Kakao);
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: '약속에 초대되었습니다!',
        imageUrl: 'src/assets/icons/ic_logo.svg',
        link: {
          webUrl: route,
          mobileWebUrl: route,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            webUrl: route,
            mobileWebUrl: route,
          },
        },
      ],
    });
  }
};
