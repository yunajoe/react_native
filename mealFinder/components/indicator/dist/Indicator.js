"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ThemeContext_1 = require("@/context/ThemeContext");
function Indicator() {
    var theme = react_1.useContext(ThemeContext_1.ThemeContext).theme;
    var changedColor = theme === 'dark' ? '#3c3c41' : '#2fbe61';
    return (react_1["default"].createElement(react_native_1.View, { style: [styles.container, styles.horizontal] },
        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: changedColor })));
}
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});
exports["default"] = Indicator;
