"use strict";
exports.__esModule = true;
exports.checkPassWordValidation = exports.validEmail = exports.validUserName = void 0;
// username validation
exports.validUserName = function (username) {
    if (username.trim().length >= 2 && username.trim().length <= 10) {
        return true;
    }
    return false;
};
// email validation
exports.validEmail = function (email) {
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var result = emailRegex.test(email.trim());
    return result;
};
// password validation
exports.checkPassWordValidation = function (password) {
    var engRegex = new RegExp('[a-zA-Z]');
    var numRegex = new RegExp('\\d');
    var specialCharRegex = new RegExp('[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣s\\s]'); // 영어, 한글, 공백을 제외한 나머지문자 = 즉 , 특수문자
    var result1 = engRegex.test(password); // 영어가 있으면 true
    var result2 = numRegex.test(password); // 숫자가 있는지확인
    var result3 = specialCharRegex.test(password); // 특수문자가 있는지 확인(여)
    if (result1 && result2) {
        return true;
    }
    if (result2 && result3) {
        return true;
    }
    if (result1 && result3) {
        return true;
    }
    return false;
};
