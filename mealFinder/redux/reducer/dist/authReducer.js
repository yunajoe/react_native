"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AuthInitialState = void 0;
var storage_1 = require("../../utils/storage");
exports.AuthInitialState = {
    id: '',
    accessToken: null,
    refreshToken: null,
    email: '',
    username: '',
    password: '',
    // login
    loginStatus: null,
    loginMessage: '',
    // logout
    logoutStatus: null,
    logoutMessage: ''
};
function authReducer(state, action) {
    if (state === void 0) { state = exports.AuthInitialState; }
    switch (action.type) {
        case 'LOGIN/pending': {
            return __assign({}, state);
        }
        case 'LOGIN/fulfilled': {
            var _a = action.payload, id = _a.id, username = _a.username, email = _a.email, password = _a.password, accessToken = _a.accessToken, refreshToken = _a.refreshToken, status = _a.status, message = _a.message;
            storage_1.saveNonStringItemToStorage({
                key: 'user',
                saveValue: { username: username, email: email, password: password }
            });
            return __assign(__assign({}, state), { id: id,
                username: username,
                email: email,
                password: password,
                accessToken: accessToken,
                refreshToken: refreshToken, loginStatus: status, loginMessage: message });
        }
        case 'LOGIN/rejected': {
            var _b = action.payload, status = _b.status, message = _b.message;
            return __assign(__assign({}, exports.AuthInitialState), { loginStatus: status, loginMessage: message });
        }
        // 로그아웃
        case 'LOGOUT/pending': {
            console.log('로그아웃펜딩');
            return __assign({}, state);
        }
        case 'LOGOUT/fulfilled': {
            var _c = action.payload, status = _c.status, message = _c.message;
            storage_1.removeItemFromStorage('user');
            return __assign(__assign({}, exports.AuthInitialState), { logoutStatus: status, logoutMessage: message });
        }
        case 'LOGOUT/rejected': {
            var _d = action.payload, status = _d.status, message = _d.message;
            return __assign(__assign({}, exports.AuthInitialState), { logoutStatus: status, logoutMessage: message });
        }
        // reset
        case 'AUTH/reset': {
            return exports.AuthInitialState;
        }
        default:
            return state;
    }
}
exports["default"] = authReducer;
