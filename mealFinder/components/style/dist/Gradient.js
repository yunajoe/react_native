"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = require("react-native-linear-gradient");
function Gradient() {
    var width = react_native_1.useWindowDimensions().width;
    return (react_1["default"].createElement(react_native_1.View, { style: [styles.container, { width: width, height: width }] },
        react_1["default"].createElement(react_native_linear_gradient_1["default"], { colors: ['rgba(15, 16, 20,0)', 'rgba(15, 16, 20,1)'], style: styles.gradientBottom }),
        react_1["default"].createElement(react_native_linear_gradient_1["default"], { colors: ['rgba(15, 16, 20,0)', 'rgba(15, 16, 20,1)'], style: styles.gradientTop })));
}
exports["default"] = Gradient;
var styles = react_native_1.StyleSheet.create({
    container: __assign({}, react_native_1.StyleSheet.absoluteFillObject),
    gradientBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 180
    },
    gradientTop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 180
    }
});
