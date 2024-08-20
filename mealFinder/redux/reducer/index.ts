import {combineReducers} from 'redux';

import authReducer from './authReducer';
import createUserReducer from './createUserReducer';
import deleteUserReducer from './deleteUserReducer';
import searchReducer from './searchReducer';
import updateUserReducer from './updateUserReducer';

const reducer = combineReducers({
  authReducer,
  createUserReducer,
  updateUserReducer,
  deleteUserReducer,
  searchReducer,
});

export default reducer;
