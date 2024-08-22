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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.initialState = void 0;
var storageUtils_1 = require("../../utils/storageUtils");
exports.initialState = {
    insertSearchItemArr: [],
    deletedSearchedItemArr: [],
    isSelectedDeleteButtonClick: false,
    isWholeDeleteButtonClick: false,
    isWholeItemDelete: false
};
function searchReducer(state, action) {
    var _a, _b;
    if (state === void 0) { state = exports.initialState; }
    var payload = action.payload;
    switch (action.type) {
        case 'SEARCHED':
            var trimmedPayLoad = (_a = payload.value) === null || _a === void 0 ? void 0 : _a.trim();
            var result = storageUtils_1.checkValueInStorage(trimmedPayLoad, state.insertSearchItemArr);
            if (result) {
                return __assign(__assign({}, state), { insertSearchItemArr: __spreadArrays(state.insertSearchItemArr, [trimmedPayLoad]) });
            }
            return __assign({}, state);
        case 'DELETE/SELECTED_BUTTON':
            return __assign(__assign({}, state), { isSelectedDeleteButtonClick: payload.isSelectedDeleteButtonClick });
        case 'DELETE/WHOLE_BUTTON':
            return __assign(__assign({}, state), { isWholeDeleteButtonClick: payload.isWholeDeleteButtonClick });
        case 'DELETE/SEARCHED_ITEM':
            var trimmedDeletedValue = (_b = payload.deleteValue) === null || _b === void 0 ? void 0 : _b.trim();
            return __assign(__assign({}, state), { deletedSearchedItemArr: __spreadArrays(state.deletedSearchedItemArr, [
                    trimmedDeletedValue,
                ]) });
        case 'DELETE/WHOLE_ITEM':
            return __assign(__assign({}, state), { isWholeItemDelete: true });
        case 'DELETE/RESET':
            return exports.initialState;
        default:
            return state;
    }
}
exports["default"] = searchReducer;
