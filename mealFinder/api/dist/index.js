"use strict";
exports.__esModule = true;
exports.kakaoSignOut = exports.kakaoSignIn = exports.checkUserById = exports.checkUser = exports.checkEmail = exports.checkUserName = exports.updateUserName = exports.signInUser = exports.signOutUser = exports.deleteUser = exports.createUser = void 0;
// user
exports.createUser = 'http://10.0.2.2:3001/signup';
exports.deleteUser = 'http://10.0.2.2:3001/user/delete';
exports.signOutUser = 'http://10.0.2.2:3001/signout';
exports.signInUser = 'http://10.0.2.2:3001/signin';
exports.updateUserName = 'http://10.0.2.2:3001/user/update/username';
// check
exports.checkUserName = 'http://10.0.2.2:3001/check/DuplicatedUsername';
exports.checkEmail = 'http://10.0.2.2:3001/check/DuplicatedEmail';
exports.checkUser = 'http://10.0.2.2:3001/check/user';
exports.checkUserById = 'http://10.0.2.2:3001/check/user/id';
// kakao
exports.kakaoSignIn = 'http://10.0.2.2:3001/kakao/signin';
exports.kakaoSignOut = 'http://10.0.2.2:3001/kakao/signout';
