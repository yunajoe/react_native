import {
  checkEmailByAll,
  checkUserById,
  createUser,
  deleteUser,
  getSubEmailListById,
  kakaoSignIn,
  kakaoSignOut,
  sendAuthCode,
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
      console.log('rrr', result);
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

export const sendNewEmail = createAsyncThunk(
  'SEND/EMAIL',
  async (email: string) => {
    try {
      const response = await fetch(sendEmail, {
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

type SendAuthCode = {
  authEmail: string;
  email: string;
  authcode: string;
};

export const sendAuthrizationCode = createAsyncThunk(
  'SEND/AUTHCODE',
  async ({authEmail, email, authcode}: SendAuthCode) => {
    try {
      const response = await fetch(sendAuthCode, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({authEmail, email, authcode}),
      });

      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);

export const getSubEmailList = createAsyncThunk(
  'SUBEMAIL/LIST',
  async (id: string) => {
    // encodeURIComponent(id)
    try {
      const response = await fetch(`${getSubEmailListById}?id=${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });

      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  },
);
