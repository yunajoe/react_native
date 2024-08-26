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
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var Food_1 = require("@/components/item/Food");
var RanDomFood_1 = require("@/components/item/RanDomFood");
var SearchTitle_1 = require("@/components/title/SearchTitle");
var ThemeContext_1 = require("@/context/ThemeContext");
var useRandomData_1 = require("@/hooks/useRandomData");
var useSearchData_1 = require("@/hooks/useSearchData");
var searchAction_1 = require("@/redux/searchAction");
var store_1 = require("@/redux/store");
var dark_mode_style_1 = require("@/styles/darkmode/dark_mode_style");
var home_style_1 = require("@/styles/screen/home_style");
var search_1 = require("@/utils/search");
var faSearch_1 = require("@fortawesome/free-solid-svg-icons/faSearch");
var faShuffle_1 = require("@fortawesome/free-solid-svg-icons/faShuffle");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
function Home() {
    var _this = this;
    var _a = react_1.useState(''), searchedValue = _a[0], setSearchedValue = _a[1];
    var _b = react_1.useState(''), searchedTitle = _b[0], setSearchTitle = _b[1];
    var dispatch = store_1.useAppDispatch();
    var theme = react_1.useContext(ThemeContext_1.ThemeContext).theme;
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var _c = useSearchData_1["default"](searchedValue), searchData = _c.searchData, setSearchData = _c.setSearchData, isSearchLoading = _c.isSearchLoading, getSearchFood = _c.getSearchFood;
    var _d = useRandomData_1["default"](), randomData = _d.randomData, setRandomData = _d.setRandomData, getRanDomFood = _d.getRanDomFood;
    var _e = react_1.useState(false), isSearchApiCalled = _e[0], setIsSearchApiCalled = _e[1];
    //검색어 입력 입력 안 했을때
    var _f = react_1.useState(''), noSearchKeyword = _f[0], setNoSearchKeyword = _f[1];
    // random펑션
    var onPressRandomFunction = function () {
        getRanDomFood();
    };
    // 검색 펑션
    var onPressSearchFunction = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSearchApiCalled(true);
                    if (!(searchedValue.trim().length === 0)) return [3 /*break*/, 1];
                    setNoSearchKeyword('검색어 입력을 안했습니다');
                    setSearchData([]);
                    return [3 /*break*/, 3];
                case 1:
                    setSearchTitle(searchedValue.trim());
                    setSearchedValue('');
                    setSearchData([]);
                    getSearchFood();
                    return [4 /*yield*/, search_1.saveSearchedValue(authState, searchedValue)];
                case 2:
                    _a.sent();
                    dispatch(searchAction_1.search(searchedValue.trim()));
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // const aaa = getItemFromStorage('user');
    // const bbb = getItemFromStorage(authState.email);
    // aaa.then(data => {
    //   console.log('dasdfsdfsdfta', data);
    // });
    // bbb.then(data => {
    //   console.log('ㅎㅎㅎㅎㅎ', data);
    // });
    var darkModeStyle = dark_mode_style_1.darkModeStyling(theme);
    return (react_1["default"].createElement(react_native_1.View, { style: darkModeStyle.container },
        react_1["default"].createElement(react_native_1.Text, { style: darkModeStyle.appTitle }, "Meal Finder"),
        react_1["default"].createElement(react_native_1.View, { style: home_style_1.wrapperStyle.container },
            react_1["default"].createElement(react_native_1.View, { style: home_style_1.wrapperStyle.subContainer },
                react_1["default"].createElement(react_native_1.TextInput, { multiline: true, maxLength: 40, style: styles.inputStyle, placeholder: "Search for meals or keywords", placeholderTextColor: "#808080", onChangeText: setSearchedValue, value: searchedValue, underlineColorAndroid: "rgba(0,0,0,0)" }),
                react_1["default"].createElement(react_native_1.TouchableHighlight, { underlayColor: "rgba(10, 68, 18, 0.9)", style: styles.searchButtonStyle, onPress: function () {
                        setRandomData([]);
                        if (searchedValue.trim().length === 0) {
                            setNoSearchKeyword('검색어가 없습니다');
                        }
                        else {
                            onPressSearchFunction();
                            setNoSearchKeyword('');
                        }
                    } },
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: faSearch_1.faSearch, color: theme === 'dark' ? 'white' : 'black' })))),
            react_1["default"].createElement(react_native_1.TouchableHighlight, { underlayColor: "rgba(10, 68, 18, 0.9)", style: styles.randomButtonStyle, onPress: onPressRandomFunction },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: faShuffle_1.faShuffle, color: theme === 'dark' ? 'white' : 'black' })))),
        react_1["default"].createElement(react_native_1.View, null, randomData.length === 0 && (react_1["default"].createElement(SearchTitle_1["default"], { theme: theme, noSearchKeyword: noSearchKeyword, searchData: searchData, searchedTitle: searchedTitle, isSearchLoading: isSearchLoading, isSearchApiCalled: isSearchApiCalled }))),
        (randomData === null || randomData === void 0 ? void 0 : randomData.length) > 0 ? (react_1["default"].createElement(RanDomFood_1["default"], { data: randomData })) : ((noSearchKeyword === null || noSearchKeyword === void 0 ? void 0 : noSearchKeyword.length) === 0 && react_1["default"].createElement(Food_1["default"], { data: searchData }))));
}
exports["default"] = Home;
// const aaa = getItemFromStorage('user');
// const bbbbb = getItemFromStorage(authState.email)
// aaa.then(data => {
//   console.log('data', data);
// });
// removeItemFromStorage('user');
// removeItemFromStorage('kakao_user');
var styles = react_native_1.StyleSheet.create({
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
