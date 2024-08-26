"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Indicator_1 = require("@/components/indicator/Indicator");
var dark_mode_style_1 = require("@/styles/darkmode/dark_mode_style");
var home_style_1 = require("@/styles/screen/home_style");
function SearchTitle(_a) {
    var theme = _a.theme, noSearchKeyword = _a.noSearchKeyword, searchData = _a.searchData, searchedTitle = _a.searchedTitle, isSearchLoading = _a.isSearchLoading, isSearchApiCalled = _a.isSearchApiCalled;
    var darkModeStyle = dark_mode_style_1.darkModeStyling(theme);
    var noDataText = (react_1["default"].createElement(react_native_1.Text, { style: [darkModeStyle.title, home_style_1.wrapperStyle.titleContainer] }, noSearchKeyword));
    // console.log('isSeachLoading', isSearchLoading);
    console.log('에이피아이호오출', isSearchApiCalled);
    console.log('noSe', noSearchKeyword);
    var conditionDataText = searchData === null ? (react_1["default"].createElement(react_native_1.Text, { style: [darkModeStyle.title, home_style_1.wrapperStyle.titleContainer] },
        searchedTitle,
        " \uAC80\uC0C9\uC5B4\uC758 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4")) : (react_1["default"].createElement(react_native_1.Text, { style: [darkModeStyle.title, home_style_1.wrapperStyle.titleContainer] },
        searchedTitle,
        " \uAC80\uC0C9\uC5B4\uC758 \uACB0\uACFC \uC785\uB2C8\uB2E4"));
    return (react_1["default"].createElement(react_native_1.View, null, isSearchLoading && isSearchApiCalled ? (react_1["default"].createElement(Indicator_1["default"], null)) : (!isSearchLoading &&
        isSearchApiCalled && (react_1["default"].createElement(react_native_1.View, null, noSearchKeyword.length > 0 ? noDataText : conditionDataText)))));
}
exports["default"] = SearchTitle;
