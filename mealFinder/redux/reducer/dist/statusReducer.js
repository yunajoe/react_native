"use strict";
exports.__esModule = true;
exports.StatusInitialState = void 0;
exports.StatusInitialState = {
    loginStatus: null,
    loginMessage: ''
};
function statusReducer(state, action) {
    if (state === void 0) { state = exports.StatusInitialState; }
    switch (action.type) {
        case 'STATUS/login': {
            console.log('STATUS/LOGIN입니다아아아아앙아아아아아아앙아', action.payload);
            return {};
        }
        default:
            return state;
    }
}
exports["default"] = statusReducer;
