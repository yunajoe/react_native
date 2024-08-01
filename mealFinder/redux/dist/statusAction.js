"use strict";
// status
exports.__esModule = true;
exports.loginStatus = void 0;
exports.loginStatus = function (_a) {
    var status = _a.status, message = _a.message;
    return ({
        type: 'STATUS/login',
        payload: {
            loginStatus: status,
            loginMessage: message
        }
    });
};
