"use strict";
exports.__esModule = true;
var new_profile_button_1 = require("@/styles/button/new_profile_button");
var react_1 = require("react");
var react_native_1 = require("react-native");
function NewProfileButton() {
    return (react_1["default"].createElement(react_native_1.View, { style: new_profile_button_1.styles.logout_withdrawal_container },
        react_1["default"].createElement(react_native_1.Text, null, "\uB85C\uADF8\uC544\uC6C3"),
        react_1["default"].createElement(react_native_1.View, { style: new_profile_button_1.styles.divider }),
        react_1["default"].createElement(react_native_1.Text, null, "\uD68C\uC6D0\uD0C8\uD1F4")));
}
exports["default"] = NewProfileButton;
