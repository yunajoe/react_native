"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var commonColor = {
    colors: {
        commonWhite: '#FFFFFF',
        commonBlack: '#000000'
    }
};
var light = __assign({ themeColor: '#BBC3A4', appTitle: '#12372A', title: '#FBFADA', myInterestTitle: '', green100: '#D7E4C0', brown100: '#B3A398' }, commonColor.colors);
var dark = __assign({ themeColor: '#040D12', appTitle: '#FBFADA', title: '#FBFADA', myInterestTitle: '#D5CEA3', green200: '#5C8374', green100: '#93B1A6' }, commonColor.colors);
exports["default"] = { light: light, dark: dark };
