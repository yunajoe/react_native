export type AuthState = {
  id: string;
  accessToken: string | null;
  refreshToken: string | null;
  email: string;
  username: string;
  password: string;
  loginStatus: number | null;
  loginMessage: string;
  logoutStatus: number | null;
  logoutMessage: string;
};

export type KaKaoAuthState = {
  id: string;
  accessToken: string | null;
  refreshToken: string | null;
  email: string;
  username: string;
  profileImageUrl: string;
  thumbnailImageUrl: string;
  kakaoLoginStatus: number | null;
  kakaoLoginMessage: string;
  kakaLogoutStatus: number | null;
  kakaoLogoutMessage: string;
};

export type CreateUserState = {
  email: string;
  username: string;
  password: string;
  status: number;
  message: string;
};

export type logOutUserState = {
  loading: boolean;
  id: string;
  accessToken: string | null;
  refreshToken: string | null;
  message: string;
  status: number | null;
};

export type UpdateUserState = {
  updateUserNameMessage: string;
  updateUserNameStatus: number | null;
  email?: string;
  username?: string;
  password?: string;
};
export type DeleteUserState = {
  deleteUserStatus: number | null;
  deleteUserMessage: string;
};

export type SearchState = {
  insertSearchItemArr: string[];
  deletedSearchedItemArr: string[];
  isSelectedDeleteButtonClick: boolean;
  isWholeDeleteButtonClick: boolean;
  isWholeItemDelete: boolean;
};
