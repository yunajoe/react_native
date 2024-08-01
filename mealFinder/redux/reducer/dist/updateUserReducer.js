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
exports.initialState = void 0;
var storage_1 = require("../../utils/storage");
exports.initialState = {
    loading: true,
    message: '',
    status: null
};
function updateUserReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    // payload는 api return값이댜
    var payload = action.payload;
    switch (action.type) {
        case 'UPDATE/pending':
            return __assign(__assign({}, state), { loading: true, message: 'Pending중입니다', status: 202 });
        case 'UPDATE/fulfilled': {
            var _a = action.payload, email = _a.email, password = _a.password, username = _a.username;
            storage_1.saveNonStringItemToStorage({
                key: 'user',
                saveValue: { email: email, username: username, password: password }
            });
            return __assign(__assign({}, state), { loading: false, message: payload.message, status: payload.status, email: email,
                password: password,
                username: username });
        }
        case 'UPDATE/rejected':
            return __assign(__assign({}, state), { loading: false, message: payload.message, status: payload.status });
        case 'UPDATE/reset':
            return exports.initialState;
        default:
            return state;
    }
}
exports["default"] = updateUserReducer;
