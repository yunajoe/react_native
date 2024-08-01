"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function ProfileScreenButton() {
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(Button, { title: "\uB85C\uADF8\uC544\uC6C3\uD558\uAE30", onPress: handleLogOut })),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(Button, { title: "\uD68C\uC6D0\uD0C8\uD1F4\uD558\uAE30", onPress: handleWithDrawal }))));
}
exports["default"] = ProfileScreenButton;
