"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    greetingText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
    },
    loginUserContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        marginBottom: 20,
        padding: 6
    },
    beforeLoginUserContainer: {
        marginTop: 20
    },
    introduceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 10,
        marginBottom: 20
    },
    interestKeyWordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 20,
        marginBottom: 20
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 20,
        marginBottom: 20
    },
    divider: {
        borderWidth: 1,
        height: 1,
        borderColor: '#808080'
    },
    button_container: {
        flexDirection: 'column',
        rowGap: 10
    }
});
