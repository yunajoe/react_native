"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function Indicator() {
    return (react_1["default"].createElement(react_native_1.View, { style: [styles.container] },
        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#0000ff" })));
}
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
exports["default"] = Indicator;
