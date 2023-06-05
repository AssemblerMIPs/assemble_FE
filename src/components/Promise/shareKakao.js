const initialize = () => {
  if (!window.Kakao || !window.Kakao.isInitialized()) {
    window.Kakao && window.Kakao.init(import.meta.env.VITE_JS_KEY);
  }
  return window.Kakao;
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
        imageUrl: 'https://i.ibb.co/ySptZt7/image.png',
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
