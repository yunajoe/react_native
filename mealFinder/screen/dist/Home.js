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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var faSearch_1 = require("@fortawesome/free-solid-svg-icons/faSearch");
var faShuffle_1 = require("@fortawesome/free-solid-svg-icons/faShuffle");
var RanDomFood_1 = require("../components/item/RanDomFood");
var Food_1 = require("../components/item/Food");
var ThemeContext_1 = require("../context/ThemeContext");
var theme_1 = require("../theme");
var storage_1 = require("../utils/storage");
var react_redux_1 = require("react-redux");
var searchAction_1 = require("../redux/searchAction");
var storageUtils_1 = require("../utils/storageUtils");
function Home() {
    var _this = this;
    var _a = react_1.useState(''), searchedValue = _a[0], setSearchedValue = _a[1];
    var _b = react_1.useState(''), searchedTitle = _b[0], setSearchTitle = _b[1];
    var _c = react_1.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var _d = react_1.useContext(ThemeContext_1.ThemeContext), theme = _d.theme, setToggleFunction = _d.setToggleFunction;
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    // search데이터보관하는곳
    var _e = react_1.useState([]), data = _e[0], setData = _e[1];
    // random데이터
    var _f = react_1.useState([]), randomData = _f[0], setRandomData = _f[1];
    // API호출을 했는지 check
    var _g = react_1.useState(false), isAPICalled = _g[0], setIsAPICalled = _g[1];
    //검색어 입력 입력 안 했을때
    var _h = react_1.useState(''), noSearchKeyword = _h[0], setNoSearchKeyword = _h[1];
    var getSearchFood = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, json, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchedValue)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    json = _a.sent();
                    setData(json.meals);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // 중복제거하기
    var saveSearchedValueFunc = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(authState.email !== '')) return [3 /*break*/, 2];
                    return [4 /*yield*/, storage_1.getItemFromStorage(authState.email).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var trimmedValue, result, updatedData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data !== null)) return [3 /*break*/, 3];
                                        trimmedValue = searchedValue.trim();
                                        result = storageUtils_1.checkValueInStorage(trimmedValue, data);
                                        if (!(trimmedValue.length > 0 && result)) return [3 /*break*/, 2];
                                        updatedData = __spreadArrays(data, [trimmedValue]);
                                        return [4 /*yield*/, storage_1.saveNonStringItemToStorage({
                                                key: authState.email,
                                                saveValue: updatedData
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [3 /*break*/, 5];
                                    case 3: 
                                    // data가 null즉, 처음일떄
                                    return [4 /*yield*/, storage_1.saveNonStringItemToStorage({
                                            key: authState.email,
                                            saveValue: [searchedValue.trim()]
                                        })];
                                    case 4:
                                        // data가 null즉, 처음일떄
                                        _a.sent();
                                        _a.label = 5;
                                    case 5:
                                        dispatch(searchAction_1.search(searchedValue.trim()));
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var getRanDomFood = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, json, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, fetch('https://www.themealdb.com/api/json/v1/1/random.php')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    setRandomData(json.meals);
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 4: return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // random펑션
    var onPressRandomFunction = function () {
        getRanDomFood();
    };
    // 검색 펑션
    var onPressFunction = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(searchedValue.trim().length === 0)) return [3 /*break*/, 1];
                    setIsAPICalled(false);
                    return [3 /*break*/, 3];
                case 1:
                    setSearchTitle(searchedValue.trim());
                    setSearchedValue('');
                    setIsAPICalled(true);
                    getSearchFood();
                    // storage에 검색어 저장하기
                    return [4 /*yield*/, saveSearchedValueFunc()];
                case 2:
                    // storage에 검색어 저장하기
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var darkModeStyle = styling(theme);
    var noDataText = (react_1["default"].createElement(react_native_1.Text, { style: [darkModeStyle.title, wrapperStyle.titleContainer] }, "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"));
    var conditionDataText = data === null ? (react_1["default"].createElement(react_native_1.Text, { style: [darkModeStyle.title, wrapperStyle.titleContainer] },
        searchedTitle,
        " \uAC80\uC0C9\uC5B4\uC758 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4")) : (react_1["default"].createElement(react_native_1.Text, { style: [darkModeStyle.title, wrapperStyle.titleContainer] },
        searchedTitle,
        " \uAC80\uC0C9\uC5B4\uC758 \uACB0\uACFC \uC785\uB2C8\uB2E4"));
    return (react_1["default"].createElement(react_native_1.View, { style: [{ flex: 1 }, darkModeStyle.container] },
        react_1["default"].createElement(react_native_1.Text, { style: darkModeStyle.appTitle }, "Meal Finder"),
        react_1["default"].createElement(react_native_1.View, { style: wrapperStyle.container },
            react_1["default"].createElement(react_native_1.View, { style: wrapperStyle.subContainer },
                react_1["default"].createElement(react_native_1.TextInput, { multiline: true, maxLength: 40, style: styles.inputStyle, placeholder: "Search for meals or keywords", placeholderTextColor: "#808080", onChangeText: setSearchedValue, value: searchedValue, underlineColorAndroid: "rgba(0,0,0,0)" }),
                react_1["default"].createElement(react_native_1.TouchableHighlight, { underlayColor: "rgba(10, 68, 18, 0.9)", style: styles.searchButtonStyle, onPress: function () {
                        setRandomData([]);
                        if (searchedValue.trim().length === 0) {
                            setNoSearchKeyword('검색어가 없습니다');
                        }
                        else {
                            onPressFunction();
                            setNoSearchKeyword('');
                        }
                    } },
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: faSearch_1.faSearch, color: theme === 'dark' ? 'white' : 'black' })))),
            react_1["default"].createElement(react_native_1.TouchableHighlight, { underlayColor: "rgba(10, 68, 18, 0.9)", style: styles.randomButtonStyle, onPress: onPressRandomFunction },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: faShuffle_1.faShuffle, color: theme === 'dark' ? 'white' : 'black' })))),
        react_1["default"].createElement(react_native_1.View, null, randomData.length > 0
            ? null
            : noSearchKeyword && (noSearchKeyword === null || noSearchKeyword === void 0 ? void 0 : noSearchKeyword.length) > 0
                ? noDataText
                : isAPICalled &&
                    (isLoading ? (react_1["default"].createElement(react_native_1.View, { style: styles.spinner },
                        react_1["default"].createElement(react_native_1.ActivityIndicator, null))) : (conditionDataText))),
        (randomData === null || randomData === void 0 ? void 0 : randomData.length) > 0 ? (react_1["default"].createElement(RanDomFood_1["default"], { data: randomData })) : ((noSearchKeyword === null || noSearchKeyword === void 0 ? void 0 : noSearchKeyword.length) === 0 && react_1["default"].createElement(Food_1["default"], { data: data }))));
}
exports["default"] = Home;
// dark모드랑 상관없는 기본적인 스타일
var styles = react_native_1.StyleSheet.create({
    spinner: {
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        backgroundColor: 'white',
        width: 300,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        fontSize: 14,
        borderBottomWidth: 0
    },
    searchButtonStyle: {
        borderWidth: 1,
        borderColor: '#dedede',
        color: '#fff',
        fontSize: 14,
        padding: 8,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    randomButtonStyle: {
        borderWidth: 1,
        borderColor: '#dedede',
        color: '#fff',
        fontSize: 14,
        padding: 8,
        textAlign: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
// 이건 건드리지 말기
var wrapperStyle = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center'
    },
    subContainer: {
        flexDirection: 'row'
    },
    titleContainer: {
        marginTop: 10,
        marginBottom: 10
    }
});
// dark모드에 따른 변화
var styling = function (theme) {
    var _a, _b, _c;
    return react_native_1.StyleSheet.create({
        container: {
            backgroundColor: (_a = theme_1.Colors[theme]) === null || _a === void 0 ? void 0 : _a.themeColor
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
