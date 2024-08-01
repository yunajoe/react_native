"use strict";
exports.__esModule = true;
var input_error_style_1 = require("@/styles/error/input_error_style");
var react_1 = require("react");
var react_native_1 = require("react-native");
function InputError(_a) {
    var type = _a.type, errorMessage = _a.errorMessage;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, type === 'multi' ? (react_1["default"].createElement(react_native_1.FlatList, { data: errorMessage, renderItem: function (aaaa) { return console.log('aaa', aaaa); } })) : (react_1["default"].createElement(react_native_1.Text, { style: input_error_style_1.styles.errorMessage }, errorMessage))));
}
exports["default"] = InputError;
