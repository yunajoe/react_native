import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

// 순서가, action => reducer 이다
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
