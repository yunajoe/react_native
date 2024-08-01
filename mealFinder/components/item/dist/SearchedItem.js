"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var storage_1 = require("../../utils/storage");
var storageUtils_1 = require("../../utils/storageUtils");
var searchAction_1 = require("../../redux/searchAction");
function SearchedItem(_a) {
    var _this = this;
    var name = _a.name;
    var dispatch = react_redux_1.useDispatch();
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var searchState = react_redux_1.useSelector(function (state) { return state.searchReducer; });
    var handleDeleteItem = function (selectedItemName) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!searchState.isSelectedDeleteButtonClick) return [3 /*break*/, 2];
                    // 왜 아래처럼 disaptch를 storge보다 위에두면은 안되는가?
                    // dispatch(deleteSearchItem(selectedItemName));
                    return [4 /*yield*/, storage_1.getItemFromStorage(authState.email).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var updatedData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        updatedData = storageUtils_1.deleteValueFromStorage(selectedItemName, data);
                                        return [4 /*yield*/, storage_1.saveNonStringItemToStorage({
                                                key: authState.email,
                                                saveValue: updatedData
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // 왜 아래처럼 disaptch를 storge보다 위에두면은 안되는가?
                    // dispatch(deleteSearchItem(selectedItemName));
                    _a.sent();
                    dispatch(searchAction_1.deleteSearchItem(selectedItemName));
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.Pressable, { onPress: function () { return handleDeleteItem(name); }, style: styles.container },
        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, name),
        searchState.isSelectedDeleteButtonClick && (react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faXmark }))));
}
exports["default"] = SearchedItem;
var styles = react_native_1.StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#E5E5CB',
        marginRight: 10,
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 2,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#F6E9B2'
    },
    name: {
        color: '#0A6847'
    }
});
