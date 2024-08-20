"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function SignButton(_a) {
    var title = _a.title, onPress = _a.onPress, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Button, { title: title, onPress: onPress, disabled: disabled })));
}
exports["default"] = SignButton;
