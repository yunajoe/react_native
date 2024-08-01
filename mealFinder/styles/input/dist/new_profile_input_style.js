"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    // email제외 컨테이너
    inputContainer: {
        marginBottom: 10
    },
    inputLabel: {
        marginBottom: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10
    },
    errorMessage: {
        color: 'red'
    }
});
