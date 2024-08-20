"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var input_error_style_1 = require("@/styles/error/input_error_style");
function InputError(_a) {
    var errorMessage = _a.errorMessage;
    return react_1["default"].createElement(react_native_1.Text, { style: input_error_style_1.styles.errorMessage }, errorMessage);
}
exports["default"] = InputError;
