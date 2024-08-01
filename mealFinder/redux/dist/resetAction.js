"use strict";
exports.__esModule = true;
exports.resetUpdateUser = exports.resetDeleteUser = exports.resetRegisterUser = exports.resetAuthUser = void 0;
// reset
exports.resetAuthUser = {
    type: 'AUTH/reset'
};
exports.resetRegisterUser = {
    type: 'REGISTER/reset'
};
exports.resetDeleteUser = {
    type: 'DELETE/reset'
};
exports.resetUpdateUser = {
    type: 'UPDATE/reset'
};
