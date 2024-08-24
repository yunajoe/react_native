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
var useAlertMessage_1 = require("@/hooks/useAlertMessage");
var action_1 = require("@/redux/action");
var store_1 = require("@/redux/store");
var storage_1 = require("@/utils/storage");
var native_1 = require("@react-navigation/native");
var _a = react_native_1.NativeModules.KaKaoModule, getKaKaoLogin = _a.getKaKaoLogin, getUserProfile = _a.getUserProfile;
function SignIn() {
    var _this = this;
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var navigation = native_1.useNavigation();
    var dispatch = store_1.useAppDispatch();
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    console.log('SIGNIN컴퍼넌트입니당');
    console.log('authState', authState);
    var submit = function () {
        if (email.trim().length === 0) {
            react_native_1.Alert.alert('email을 입력해주세요');
            return;
        }
        if (password.trim().length === 0) {
            react_native_1.Alert.alert('password를 입력해주세요');
            return;
        }
        dispatch(action_1.loginUser({ email: email, password: password }));
    };
    // 소셜 로그인
    var handleKaKaoLogin = function () {
        getKaKaoLogin(function (result) {
            if (result) {
                getUserProfile(function (user) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        dispatch(action_1.KaKaoLoginUser({
                            kakaoId: user.kakaoId,
                            kakaoEmail: user.kakaoEmail,
                            kakaoNickName: user.kakaoNickName,
                            profileImageUrl: user.profileImageUrl,
                            thumbnailImageUrl: user.thumbnailImageUrl
                        }));
                        return [2 /*return*/];
                    });
                }); });
            }
        });
    };
    useAlertMessage_1["default"]({
        state: { message: authState.loginMessage, status: authState.loginStatus },
        destination: 'Home',
        actionType: 'LOGIN'
    });
    var handleGoogleLogin = function () { };
    var aaa = storage_1.getItemFromStorage('user');
    aaa.then(function (data) {
        console.log('data', data);
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.inputContainer },
                react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: "email", value: email, onChangeText: setEmail }),
                react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: "password", value: password, onChangeText: setPassword })),
            react_1["default"].createElement(react_native_1.View, { style: styles.loginButton },
                react_1["default"].createElement(react_native_1.Button, { title: "\uB85C\uADF8\uC778", onPress: submit })),
            react_1["default"].createElement(react_native_1.View, { style: styles.socialLoginContainer },
                react_1["default"].createElement(react_native_1.Button, { title: "\uCE74\uCE74\uC624\uB85C\uB85C\uADF8\uC778\uD558\uAE30", onPress: handleKaKaoLogin, color: "#FFBC00" }),
                react_1["default"].createElement(react_native_1.Button, { title: "\uAD6C\uAE00\uB85C\uB85C\uADF8\uC778\uD558\uAE30", onPress: handleGoogleLogin })),
            react_1["default"].createElement(react_native_1.Button, { title: "\uD68C\uC6D0\uAC00\uC785", onPress: function () { return navigation.navigate('SignUp'); } }))));
}
exports["default"] = SignIn;
var styles = react_native_1.StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    inputContainer: {
        marginBottom: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    loginButton: {
        marginBottom: 20
    },
    loginStatus: {
        flexDirection: 'row'
    },
    loginFindContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        columnGap: 10
    },
    loginFind: {
        width: 150,
        borderWidth: 2,
        borderColor: 'orange',
        textAlign: 'center'
    },
    socialLoginContainer: {
        marginBottom: 20,
        rowGap: 5
    },
    // kakao 이미지
    kakaoImage: {
        overflow: 'hidden',
        height: 37,
        marginBottom: 10
    }
});
