"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function DarkModeSwitch(_a) {
    var isLight = _a.isLight, toggleSwitch = _a.toggleSwitch;
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Switch, { trackColor: { "false": '#767577', "true": 'green' }, thumbColor: isLight ? '#f5dd4b' : '#f4f3f4', ios_backgroundColor: "#3e3e3e", onValueChange: toggleSwitch, value: isLight })));
}
exports["default"] = DarkModeSwitch;
