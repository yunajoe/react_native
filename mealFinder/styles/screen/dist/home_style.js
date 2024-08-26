"use strict";
exports.__esModule = true;
exports.wrapperStyle = void 0;
var react_native_1 = require("react-native");
// 이건 건드리지 말기
exports.wrapperStyle = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center'
    },
    subContainer: {
        flexDirection: 'row'
    },
    titleContainer: {
        marginTop: 10,
        marginBottom: 10
    }
});
