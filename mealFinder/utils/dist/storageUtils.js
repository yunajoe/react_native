"use strict";
exports.__esModule = true;
exports.deleteValueFromStorage = exports.checkValueInStorage = void 0;
exports.checkValueInStorage = function (value, arr) {
    var trimmedValue = value.trim();
    if (arr.indexOf(trimmedValue) === -1) {
        return true;
    }
    return false;
};
exports.deleteValueFromStorage = function (value, arr) {
    var trimmedValue = value.trim();
    var filteredArr = arr.filter(function (item) { return item !== trimmedValue; });
    return filteredArr;
};
