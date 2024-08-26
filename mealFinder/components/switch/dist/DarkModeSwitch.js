"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useDarkMode_1 = require("@/hooks/useDarkMode");
function DarkModeSwitch() {
    var _a = useDarkMode_1["default"](), isLight = _a.isLight, toggleSwitch = _a.toggleSwitch, theme = _a.theme, setToggleFunction = _a.setToggleFunction;
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Switch, { trackColor: { "false": '#767577', "true": 'green' }, thumbColor: theme === 'light' ? '#f5dd4b' : '#f4f3f4', onValueChange: toggleSwitch, value: isLight })));
}
exports["default"] = DarkModeSwitch;
