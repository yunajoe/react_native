"use strict";
exports.__esModule = true;
exports.Separator = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
exports.Separator = function () { return react_1["default"].createElement(react_native_1.View, { style: styles.separator }); };
var styles = react_native_1.StyleSheet.create({
    separator: {
        marginVertical: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth
    }
});
