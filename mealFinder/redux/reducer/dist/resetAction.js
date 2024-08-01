"use strict";
exports.__esModule = true;
exports.resetRegisterUser = exports.resetUpdateUser = exports.resetDeleteUser = exports.resetAuthUser = void 0;
// reset
exports.resetAuthUser = {
    type: 'AUTH/RESET'
};
exports.resetDeleteUser = {
    type: 'DELETE/reset'
};
exports.resetUpdateUser = {
    type: 'UPDATE/reset'
};
exports.resetRegisterUser = {
    type: 'REGISTER/reset'
};
