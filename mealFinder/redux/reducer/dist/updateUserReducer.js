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
exports.initialState = {
    updateUserNameMessage: '',
    updateUserNameStatus: null
};
function updateUserReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'UPDATE/USERNAME/pending': {
            console.log('닉네임 변경 펜딩중');
            return __assign({}, state);
        }
        case 'UPDATE/USERNAME/fulfilled': {
            var _a = action.payload, status_1 = _a.status, message_1 = _a.message;
            console.log('닉네임이 변경되었습니다앙아');
            return __assign(__assign({}, state), { updateUserNameMessage: message_1, updateUserNameStatus: status_1 });
        }
        case 'UPDATE/rejected':
            var _b = action.payload, status = _b.status, message = _b.message;
            return __assign(__assign({}, state), { updateUserNameMessage: message, updateUserNameStatus: status });
        case 'UPDATE/reset':
            return exports.initialState;
        default:
            return state;
    }
}
exports["default"] = updateUserReducer;
