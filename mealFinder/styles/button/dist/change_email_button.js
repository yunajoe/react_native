"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    button: {
        height: 60,
        padding: 5,
        position: 'relative',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    user_info: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: 5
    },
    radio_icon: {
        position: 'absolute',
        right: 5,
        top: 16
    },
    email: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4
    }
});
