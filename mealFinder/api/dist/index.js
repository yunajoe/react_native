"use strict";
exports.__esModule = true;
exports.checkUser = exports.checkEmail = exports.checkUserName = exports.signInUser = exports.signOutUser = exports.deleteUser = exports.createUser = void 0;
// user
exports.createUser = 'http://10.0.2.2:3001/signup';
exports.deleteUser = 'http://10.0.2.2:3001/user/delete';
exports.signOutUser = 'http://10.0.2.2:3001/signout';
exports.signInUser = 'http://10.0.2.2:3001/signin';
// check
exports.checkUserName = 'http://10.0.2.2:3001/check/DuplicatedUsername';
exports.checkEmail = 'http://10.0.2.2:3001/check/DuplicatedEmail';
exports.checkUser = 'http://10.0.2.2:3001/check/user';
