"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var EditScreenLayout_1 = require("@/components/layout/EditScreenLayout");
function RegisterEmail() {
    return (react_1["default"].createElement(EditScreenLayout_1["default"], null,
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, null, "\uC774\uBA54\uC77C\uC740 \uCD5C\uB300 3\uAC1C\uAE4C\uC9C0 \uB4F1\uB85D\uAC00\uB2A5\uD569\uB2C8\uB2E4"))));
}
exports["default"] = RegisterEmail;
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
});
