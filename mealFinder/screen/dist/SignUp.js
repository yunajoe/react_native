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
var check_1 = require("@/api/check");
var DuplicatedButton_1 = require("@/components/button/DuplicatedButton");
var useAlertMessage_1 = require("@/hooks/useAlertMessage");
var action_1 = require("@/redux/action");
var checkField_1 = require("@/utils/checkField");
var checkInputValidation_1 = require("@/utils/checkInputValidation");
function SignUp() {
    var _this = this;
    var _a = react_1.useState(''), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(''), repassword = _d[0], setRePassword = _d[1];
    var _e = react_1.useState([]), userNameArr = _e[0], setUserNameArr = _e[1];
    var _f = react_1.useState([]), emailArr = _f[0], setEmailArr = _f[1];
    // 중복체크
    var _g = react_1.useState(false), isUserNameCheck = _g[0], setIsUserNameCheck = _g[1];
    var _h = react_1.useState(false), isEmailCheck = _h[0], setIsEmailCheck = _h[1];
    var dispatch = react_redux_1.useDispatch();
    var registerUserState = react_redux_1.useSelector(function (state) { return state.createUserReducer; });
    // 리셋하는 펑션
    var emailResetCheckFunc = function () {
        setIsEmailCheck(false);
    };
    var userNameResetCheckFunc = function () {
        setIsUserNameCheck(false);
    };
    // nickname check
    var handleDuplicatedUserNameButton = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, status, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!username.trim().length) {
                        react_native_1.Alert.alert('닉네임을 입력해주세요');
                        userNameResetCheckFunc();
                        return [2 /*return*/];
                    }
                    if (!checkInputValidation_1.validUserName(username.trim())) {
                        react_native_1.Alert.alert('유효한 닉네임이 아닙니다');
                        userNameResetCheckFunc();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, check_1.handleCheckByUserName(username.trim())];
                case 1:
                    _a = _b.sent(), status = _a.status, message = _a.message;
                    if (status === 200) {
                        setUserNameArr([username.trim()]);
                        setIsUserNameCheck(true);
                    }
                    else if (status === 400) {
                        userNameResetCheckFunc();
                    }
                    react_native_1.Alert.alert(message);
                    return [2 /*return*/];
            }
        });
    }); };
    // email check
    var handleDuplicatedEmailButton = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, status, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!email.trim().length) {
                        react_native_1.Alert.alert('이메일을 입력해주세요');
                        emailResetCheckFunc();
                        return [2 /*return*/];
                    }
                    if (!checkInputValidation_1.validEmail(email)) {
                        react_native_1.Alert.alert('유효한 이메일 형식이 아닙니다');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, check_1.handleCheckByEmail(email.trim())];
                case 1:
                    _a = _b.sent(), status = _a.status, message = _a.message;
                    if (status === 200) {
                        setEmailArr([email.trim()]);
                        setIsEmailCheck(true);
                    }
                    else if (status === 400) {
                        emailResetCheckFunc();
                    }
                    react_native_1.Alert.alert(message);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var isAllFilled;
        return __generator(this, function (_a) {
            isAllFilled = checkField_1.isAllFieldFilled({
                username: username,
                email: email,
                password: password,
                repassword: repassword
            });
            if (!isAllFilled)
                return [2 /*return*/];
            if (!isUserNameCheck) {
                react_native_1.Alert.alert('닉네임 중복 체크를 해주세요');
                return [2 /*return*/];
            }
            if (!isEmailCheck) {
                react_native_1.Alert.alert('이메일 중복 체크를 해주세요');
                return [2 /*return*/];
            }
            // 만약 user가 email를 고쳤을경우
            if (username.trim() !== userNameArr[userNameArr.length - 1]) {
                react_native_1.Alert.alert('닉네임 중복 체크를 해주세요');
                return [2 /*return*/];
            }
            if (email.trim() !== emailArr[emailArr.length - 1]) {
                react_native_1.Alert.alert('이메일 중복 체크를 해주세요');
                return [2 /*return*/];
            }
            if (!checkInputValidation_1.checkPassWordValidation(password.trim())) {
                react_native_1.Alert.alert('유효한 비밀번호 형식이 아닙니다');
                return [2 /*return*/];
            }
            if (password.trim() !== repassword.trim()) {
                react_native_1.Alert.alert('입력한 비밀번호와 다릅니다');
                return [2 /*return*/];
            }
            if (password.trim() === repassword.trim()) {
                dispatch(action_1.registerUser({ username: username, email: email, password: password }));
            }
            return [2 /*return*/];
        });
    }); };
    useAlertMessage_1["default"]({
        state: {
            message: registerUserState.message,
            status: registerUserState.status
        },
        destination: 'Home',
        actionType: 'REGISTER/USER',
        loginInfo: {
            email: registerUserState.email,
            password: registerUserState.password
        }
    });
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.inputContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.doubleCheckContainer },
                react_1["default"].createElement(react_native_1.TextInput, { style: [styles.input, styles.doubleCheckInput], placeholder: "username", value: username, onChangeText: setUsername }),
                react_1["default"].createElement(DuplicatedButton_1["default"], { title: "\uC911\uBCF5\uD655\uC778", onPress: handleDuplicatedUserNameButton, color: "#10380c" })),
            react_1["default"].createElement(react_native_1.View, { style: styles.doubleCheckContainer },
                react_1["default"].createElement(react_native_1.TextInput, { style: [styles.input, styles.doubleCheckInput], placeholder: "email", value: email, onChangeText: setEmail }),
                react_1["default"].createElement(DuplicatedButton_1["default"], { title: "\uC911\uBCF5\uD655\uC778", onPress: handleDuplicatedEmailButton, color: "#10380c" })),
            react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: "password", value: password, onChangeText: setPassword }),
            react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: "repassword", value: repassword, onChangeText: setRePassword })),
        react_1["default"].createElement(react_native_1.Button, { title: "\uD68C\uC6D0\uAC00\uC785\uD558\uAE30", onPress: handleSubmit })));
}
exports["default"] = SignUp;
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
    doubleCheckInput: {
        flex: 1,
        marginRight: 10
    },
    doubleCheckContainer: {
        flexDirection: 'row'
    }
});
