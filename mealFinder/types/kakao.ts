export type KakaoUserProfile = {
  kakaoEmail: string;
  kakaoId: string;
  kakaoNickName: string;
  profileImageUrl: string;
  thumbnailImageUrl: string;
};

export type KaKaoLoginApi = {
  accessToken: string | null;
  accessTokenExpiresAt: string;
  idToken: string | null;
  refreshToken: string | null;
  refreshTokenExpiresAt: string;
  username?: string;
  id?: string;
};

export type KaKaoLogOutApi = {
  status: number;
  message: string;
};
