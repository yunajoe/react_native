"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    interest_keyword_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 15,
        marginBottom: 20
    },
    press: {
        backgroundColor: 'red'
    },
    icon: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    data: {
        position: 'absolute',
        right: 20,
        top: -6
    }
});
