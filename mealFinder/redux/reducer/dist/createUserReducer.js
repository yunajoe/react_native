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
    message: '',
    status: null,
    email: '',
    username: '',
    password: ''
};
function createUserReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'REGISTER/pending':
            return __assign({}, exports.initialState);
        case 'REGISTER/fulfilled': {
            var _a = action.payload, email = _a.email, username = _a.username, password = _a.password, status_1 = _a.status, message_1 = _a.message;
            storage_1.saveNonStringItemToStorage({
                key: 'user',
                saveValue: { email: email, username: username, password: password }
            });
            return __assign(__assign({}, state), { status: status_1,
                message: message_1,
                email: email,
                username: username,
                password: password });
        }
        case 'REGISTER/rejected':
            var _b = action.payload, status = _b.status, message = _b.message;
            return __assign(__assign({}, exports.initialState), { status: status,
                message: message });
        case 'REGISTER/reset': {
            return exports.initialState;
        }
        default:
            return state;
    }
}
exports["default"] = createUserReducer;
