"use strict";
exports.__esModule = true;
exports.ThemeContextProvider = exports.ThemeContext = void 0;
var react_1 = require("react");
exports.ThemeContext = react_1.createContext({
    theme: 'light',
    setToggleFunction: function () { }
});
exports.ThemeContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState('light'), theme = _b[0], setTheme = _b[1];
    var setToggleFunction = react_1.useCallback(function (newTheme) {
        setTheme(newTheme);
    }, [theme]);
    return (React.createElement(exports.ThemeContext.Provider, { value: { theme: theme, setToggleFunction: setToggleFunction } }, children));
};
