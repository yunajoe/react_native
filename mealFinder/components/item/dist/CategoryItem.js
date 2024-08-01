"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function CategoryItem(_a) {
    var item = _a.item, sameIndexFunc = _a.sameIndexFunc, differentIndexFunc = _a.differentIndexFunc, index = _a.index, selectedIndex = _a.selectedIndex;
    if (index === selectedIndex) {
        return (react_1["default"].createElement(react_native_1.Text, { style: [styles.item, styles.selectedItem], onPress: sameIndexFunc }, item));
    }
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, { style: styles.item, onPress: function () { return differentIndexFunc(index, item); } }, item)));
}
exports["default"] = CategoryItem;
var styles = react_native_1.StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginRight: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        color: 'black'
    },
    selectedItem: {
        backgroundColor: '#B6C4B6',
        color: 'white',
        borderColor: '#436850'
    }
});
