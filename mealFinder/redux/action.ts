import {createAsyncThunk} from '@reduxjs/toolkit';

import {createUser, deleteUser, signInUser, signOutUser} from '@/api';
import {findOutUser, updateUserProfile} from '../utils/api';

type UserInfo = {
  username: string;
  email: string;
  password: string;
};

type LoginInfo = {
  email: string;
  password: string;
};

type FindOutUser = {
  email: string;
  password: string;
};

type UpdateUser = {
  email: string;
  username: string;
  password: string;
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
  console.log('email', email);
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

export const findSpecificUser = createAsyncThunk(
  'FINCSPECIFICUSER',
  async ({email, password}: FindOutUser) => {
    try {
      const response = await fetch(findOutUser, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
      });
      return response.json().then(data => data);
    } catch (err) {
      console.error(err);
    }
  },
);
// update프로필
export const updateUser = createAsyncThunk(
  'UPDATE',
  async ({email, username, password}: UpdateUser) => {
    try {
      const response = await fetch(updateUserProfile, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          newUsername: username,
          newPassword: password,
        }),
      });
      return response.json().then(data => {
        return {
          ...data,
          email,
          username,
          password,
        };
      });
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
