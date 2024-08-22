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
var action_1 = require("@/redux/action");
var resetAction_1 = require("@/redux/resetAction");
var store_1 = require("@/redux/store");
var storage_1 = require("@/utils/storage");
var native_1 = require("@react-navigation/native");
function useAlertMessage(options) {
    var _this = this;
    var state = options.state, actionType = options.actionType, destination = options.destination, loginInfo = options.loginInfo;
    var email = loginInfo === null || loginInfo === void 0 ? void 0 : loginInfo.email;
    var password = loginInfo === null || loginInfo === void 0 ? void 0 : loginInfo.password;
    var dispatch = store_1.useAppDispatch();
    var navigation = native_1.useNavigation();
    // 회원가입
    var registerUserCallbackFunc = function () {
        if (destination && state.status === 200) {
            navigation.navigate(destination);
        }
        // 자동로그인을 위한것..
        if (email && password) {
            dispatch(action_1.loginUser({ email: email, password: password }));
        }
        dispatch(resetAction_1.resetRegisterUser);
    };
    // 로그인
    var logInCallbackFunc = function () {
        if (destination && state.status === 200) {
            navigation.navigate(destination);
        }
    };
    // 로그아웃
    var logOutCallbackFunc = function () {
        if (destination && state.status === 200) {
            navigation.navigate(destination);
        }
    };
    // 변경
    var updateUserCallbackFunc = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (destination && state.status === 200) {
                        navigation.navigate(destination);
                    }
                    return [4 /*yield*/, storage_1.getItemFromStorage('user')];
                case 1:
                    data = _a.sent();
                    dispatch(action_1.loginUser({ email: data.email, password: data.password }));
                    return [2 /*return*/];
            }
        });
    }); };
    //  삭제
    var deleteUserCallback = function () {
        if (destination && state.status === 200) {
            navigation.navigate(destination);
        }
    };
    var handleMessageCallback = react_1.useCallback(function () {
        react_native_1.Alert.alert(state.message, '', [
            {
                text: '확인',
                onPress: function () {
                    switch (actionType) {
                        case 'LOGIN':
                            logInCallbackFunc();
                            break;
                        case 'LOGOUT':
                            logOutCallbackFunc();
                            break;
                        case 'REGISTER/USER':
                            registerUserCallbackFunc();
                            break;
                        case 'UPDATE/USER':
                            updateUserCallbackFunc();
                            break;
                        case 'DELETE/USER':
                            deleteUserCallback();
                            break;
                    }
                }
            },
        ]);
    }, [actionType, state.status, state.message]);
    // alert메세지
    react_1.useEffect(function () {
        if (typeof state.status === 'number' && typeof state.message === 'string') {
            if (state.status === 200 || state.status === 400) {
                handleMessageCallback();
            }
        }
        return function () {
            switch (actionType) {
                case 'LOGIN':
                    // dispatch(resetAuthUser);
                    // dispatch(resetKaKaoAuthUser);
                    break;
                case 'LOGOUT':
                    dispatch(resetAction_1.resetAuthUser);
                    break;
                case 'UPDATE/USER':
                    dispatch(resetAction_1.resetUpdateUser);
                    break;
                case 'DELETE/USER':
                    dispatch(resetAction_1.resetDeleteUser);
                    dispatch(resetAction_1.resetAuthUser);
                    break;
            }
        };
    }, [state.status, state.message]);
}
exports["default"] = useAlertMessage;
