"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var NewProfileButton_1 = require("@/components/button/NewProfileButton");
var UserContainer_1 = require("@/components/container/UserContainer");
var new_profile_style_1 = require("@/styles/screen/new_profile_style");
function NewProfile() {
    return (react_1["default"].createElement(react_native_1.View, { style: new_profile_style_1.styles.container },
        react_1["default"].createElement(UserContainer_1["default"], null),
        react_1["default"].createElement(NewProfileButton_1["default"], null)));
}
exports["default"] = NewProfile;
