"use strict";
exports.__esModule = true;
var navigation_input_style_1 = require("@/styles/input/navigation_input_style");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var react_1 = require("react");
var react_native_1 = require("react-native");
function NavigationInput(_a) {
    var title = _a.title, onPress = _a.onPress, _b = _a.icon, icon = _b === void 0 ? free_solid_svg_icons_1.faArrowRight : _b, data = _a.data;
    return (react_1["default"].createElement(react_native_1.Pressable, { style: navigation_input_style_1.styles.interest_keyword_container, onPress: onPress },
        react_1["default"].createElement(react_native_1.Text, null, title),
        react_1["default"].createElement(react_native_1.View, { style: navigation_input_style_1.styles.icon },
            react_1["default"].createElement(react_native_1.Text, { style: navigation_input_style_1.styles.data }, data),
            react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { size: 10, icon: icon }))));
}
exports["default"] = NavigationInput;
