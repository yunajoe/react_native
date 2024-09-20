import {combineReducers} from 'redux';

import authReducer from './authReducer';
import createUserReducer from './createUserReducer';
import deleteUserReducer from './deleteUserReducer';
import searchReducer from './searchReducer';
import statusReducer from './statusReucer';
import updateUserReducer from './updateUserReducer';
import listReducer from '@/redux/reducer/listReducer';

const reducer = combineReducers({
  authReducer,
  createUserReducer,
  updateUserReducer,
  deleteUserReducer,
  searchReducer,
  statusReducer,
  listReducer,
});

export default reducer;
