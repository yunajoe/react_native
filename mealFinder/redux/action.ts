import {
  checkEmailByAll,
  checkUserById,
  createUser,
  deleteUser,
  kakaoSignIn,
  kakaoSignOut,
  sendEmail,
  signInUser,
  signOutUser,
  updateUserName,
} from '@/api';
import {createAsyncThunk} from '@reduxjs/toolkit';

type UserInfo = {
  username: string;
  email: string;
  password: string;
};

type LoginInfo = {
  email: string;
  password: string;
};

type updateUserNameInfo = {
  email: string;
  username: string;
};

type KaKaoLoginInfo = {
  kakaoId: string;
  kakaoEmail: string;
  kakaoNickName: string;
  profileImageUrl: string;
  thumbnailImageUrl: string;
};

type KaKaoLogOutInfo = {
  email: string;
  status: number;
  message: string;
};

export const registerUser = createAsyncThunk(
  'REGISTER',
  async ({username, email, password}: UserInfo) => {
    try {
      const response = await fetch(createUser, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, password}),
      });
      const jsonData = await response.json();
      return {
        ...jsonData,
        email,
        username,
        password,
      };
    } catch (err) {
      console.error(err);
    }
  },
);
export const loginUser = createAsyncThunk(
  'LOGIN',
  async ({email, password}: LoginInfo) => {
    try {
      const response = await fetch(signInUser, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
        credentials: 'include',
      });
      const result = await response.json();
      return {
        ...result,
        email,
        password,
      };
    } catch (err) {
      console.error(err);
    }
  },
);

export const logOutUser = createAsyncThunk('LOGOUT', async (email: string) => {
  try {
    const response = await fetch(signOutUser, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email}),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
});

export const updateUserNickName = createAsyncThunk(
  'UPDATE/USERNAME',
  async ({email, username}: updateUserNameInfo) => {
    try {
      const response = await fetch(updateUserName, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, username}),
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (err) {
      console.error(err);
    }
  },
);

export const withDrawUser = createAsyncThunk(
  'DELETE',
  async (email: string) => {
    try {
      const response = await fetch(deleteUser, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);

export const KaKaoLoginUser = createAsyncThunk(
  'KAKAO/LOGIN',
  async ({
    kakaoId,
    kakaoEmail,
    kakaoNickName,
    profileImageUrl,
    thumbnailImageUrl,
  }: KaKaoLoginInfo) => {
    try {
      const response = await fetch(kakaoSignIn, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          kakaoId,
          kakaoEmail,
          kakaoNickName,
          profileImageUrl,
          thumbnailImageUrl,
        }),
        credentials: 'include',
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);

export const KaKaoLogOutUser = createAsyncThunk(
  'KAKAO/LOGOUT',
  async (data: KaKaoLogOutInfo | null) => {
    try {
      const response = await fetch(kakaoSignOut, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data}),
        credentials: 'include',
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);

export const getUserInfo = createAsyncThunk(
  'USERINFO/ID',
  async (id: string) => {
    console.log('API호출');
    try {
      const response = await fetch(checkUserById, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id}),
        credentials: 'include',
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);

//
export const checkNewEmail = createAsyncThunk(
  'REGISTER/EMAIL',
  async (email: string) => {
    try {
      const response = await fetch(checkEmailByAll, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
        credentials: 'include',
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);

// 'http://10.0.2.2:3001/email/send'
export const sendNewEmail = createAsyncThunk(
  'SEND/EMAIL',
  async (email: string) => {
    console.log('eeee', email);
    try {
      const response = await fetch(sendEmail, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });

      const result = await response.json();
      console.log('reuslt', result);
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);
