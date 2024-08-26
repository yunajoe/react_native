"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var processImages_1 = require("../utils/processImages");
var Dot_1 = require("./style/Dot");
var Pagination = function (_a) {
    var paginationIndex = _a.paginationIndex;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container }, processImages_1.images.map(function (_, index) {
        return (react_1["default"].createElement(Dot_1["default"], { index: index, key: index, paginationIndex: paginationIndex }));
    })));
};
exports["default"] = Pagination;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
