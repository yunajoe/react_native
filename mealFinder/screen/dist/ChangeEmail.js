"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var ChangeEmailButton_1 = require("@/components/button/ChangeEmailButton");
var EditScreenLayout_1 = require("@/components/layout/EditScreenLayout");
function ChangeEmail() {
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var onPress = function () {
        console.log('대표 이메일을 변경합니다');
    };
    return (react_1["default"].createElement(EditScreenLayout_1["default"], null,
        react_1["default"].createElement(ChangeEmailButton_1["default"], { type: "general", onPress: onPress, email: authState.email }),
        react_1["default"].createElement(ChangeEmailButton_1["default"], { type: "kakao", onPress: onPress, email: "yunaaa0620@daum.net" })));
}
exports["default"] = ChangeEmail;
