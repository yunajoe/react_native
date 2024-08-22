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
var DarkModeSwitch_1 = require("@/components/switch/DarkModeSwitch");
var ThemeContext_1 = require("@/context/ThemeContext");
var action_1 = require("@/redux/action");
var store_1 = require("@/redux/store");
var storage_1 = require("@/utils/storage");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var native_1 = require("@react-navigation/native");
function HomeHeader() {
    var _this = this;
    var _a = react_1.useState(false), isLight = _a[0], setIsLight = _a[1];
    var toggleSwitch = function () { return setIsLight(function (prev) { return !prev; }); };
    var _b = react_1.useContext(ThemeContext_1.ThemeContext), theme = _b.theme, setToggleFunction = _b.setToggleFunction;
    var navigation = native_1.useNavigation();
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var dispatch = store_1.useAppDispatch();
    var getLogIn = function () { return __awaiter(_this, void 0, void 0, function () {
        var data, email, password, kakaoUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.getItemFromStorage('user')];
                case 1:
                    data = _a.sent();
                    if (data !== null) {
                        email = data.email, password = data.password;
                        dispatch(action_1.loginUser({ email: email, password: password }));
                    }
                    return [4 /*yield*/, storage_1.getItemFromStorage('kakao_user')];
                case 2:
                    kakaoUser = _a.sent();
                    if (kakaoUser !== null) {
                        dispatch(action_1.KaKaoLoginUser({
                            kakaoId: kakaoUser.kakaoId,
                            kakaoEmail: kakaoUser.kakaoEmail,
                            kakaoNickName: kakaoUser.kakaoNickName,
                            profileImageUrl: kakaoUser.profileImageUrl,
                            thumbnailImageUrl: kakaoUser.thumbnailImageUrl
                        }));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (authState.id !== '') {
            getLogIn();
        }
    }, [authState.id]);
    var setTheme = react_1.useCallback(function () {
        var themeValue = isLight ? 'light' : 'dark';
        setToggleFunction(themeValue);
    }, [isLight, theme]);
    react_1.useEffect(function () {
        setTheme();
    }, [isLight]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.Header },
            react_1["default"].createElement(react_native_1.View, null, authState.accessToken ? (react_1["default"].createElement(react_native_1.Text, null,
                authState.username,
                "\uB2D8 \uC88B\uC740 \uD558\uB8E8 \uB418\uC138\uC694!")) : (react_1["default"].createElement(react_native_1.Text, null, "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    navigation.navigate('Profile');
                } },
                react_1["default"].createElement(react_native_1.View, { style: styles.filterButton },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser, size: 24 }))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    navigation.navigate('FoodFilter');
                } },
                react_1["default"].createElement(react_native_1.View, { style: styles.filterButton },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faFilter, size: 24 })))),
        react_1["default"].createElement(DarkModeSwitch_1["default"], { isLight: isLight, toggleSwitch: toggleSwitch })));
}
exports["default"] = HomeHeader;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    Header: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },
    filterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
    }
});
