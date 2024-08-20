import {
  createUser,
  deleteUser,
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

// export const findSpecificUser = createAsyncThunk(
//   'FINCSPECIFICUSER',
//   async ({email, password}: FindOutUser) => {
//     try {
//       const response = await fetch(findOutUser, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({email, password}),
//       });
//       return response.json().then(data => data);
//     } catch (err) {
//       console.error(err);
//     }
//   },
// );

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
