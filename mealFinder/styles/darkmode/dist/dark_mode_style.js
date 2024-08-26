"use strict";
exports.__esModule = true;
exports.darkModeStyling = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("@/theme");
exports.darkModeStyling = function (theme) {
    var _a, _b, _c;
    return react_native_1.StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: (_a = theme_1.Colors[theme]) === null || _a === void 0 ? void 0 : _a.themeColor,
            height: '100%'
        },
        appTitle: {
            textAlign: 'center',
            fontWeight: '900',
            color: (_b = theme_1.Colors[theme]) === null || _b === void 0 ? void 0 : _b.appTitle,
            fontSize: 30,
            marginBottom: 10
        },
        title: {
            color: (_c = theme_1.Colors[theme]) === null || _c === void 0 ? void 0 : _c.appTitle,
            textAlign: 'center',
            fontSize: 20
        }
    });
};
