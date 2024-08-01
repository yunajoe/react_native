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
var storage_1 = require("../../utils/storage");
var initialState = {
    deleteUserStatus: null,
    deleteUserMessage: ''
};
function deleteUserReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'DELETE/pending': {
            return initialState;
        }
        case 'DELETE/fulfilled': {
            var _a = action.payload, status = _a.status, message = _a.message;
            storage_1.removeItemFromStorage('user');
            return __assign(__assign({}, state), { deleteUserStatus: status, deleteUserMessage: message });
        }
        case 'DELETE/rejected': {
            return initialState;
        }
        case 'DELETE/reset': {
            return initialState;
        }
        default:
            return state;
    }
}
exports["default"] = deleteUserReducer;
