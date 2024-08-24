"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var new_profile_input_style_1 = require("@/styles/input/new_profile_input_style");
function NewProfileInput(_a) {
    var label = _a.label, inputValue = _a.inputValue, onChange = _a.onChange, onChangeText = _a.onChangeText;
    return (react_1["default"].createElement(react_native_1.View, { style: new_profile_input_style_1.styles.inputContainer },
        react_1["default"].createElement(react_native_1.Text, { style: new_profile_input_style_1.styles.inputLabel }, label),
        react_1["default"].createElement(react_native_1.TextInput, { style: new_profile_input_style_1.styles.input, value: inputValue, onChange: onChange, onChangeText: onChangeText })));
}
exports["default"] = NewProfileInput;
