"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var edit_layout_1 = require("@/styles/layout/edit_layout");
function EditScreenLayout(_a) {
    var children = _a.children;
    return react_1["default"].createElement(react_native_1.SafeAreaView, { style: edit_layout_1.styles.container }, children);
}
exports["default"] = EditScreenLayout;
