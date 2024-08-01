"use strict";
exports.__esModule = true;
var action_1 = require("@/redux/action");
var resetAction_1 = require("@/redux/resetAction");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
function useAlertMessage(options) {
    var state = options.state, actionType = options.actionType, destination = options.destination, loginInfo = options.loginInfo;
    var email = loginInfo === null || loginInfo === void 0 ? void 0 : loginInfo.email;
    var password = loginInfo === null || loginInfo === void 0 ? void 0 : loginInfo.password;
    var dispatch = react_redux_1.useDispatch();
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
        dispatch(resetAction_1.resetAuthUser);
    };
    var updateUserCallbackFunc = function () {
        if (destination && state.status === 200) {
            navigation.navigate(destination);
        }
        // dispatch(resetUpdateUser);
    };
    var deleteUserCallback = function () {
        if (destination && state.status === 200) {
            navigation.navigate(destination);
        }
        dispatch(resetAction_1.resetDeleteUser);
        dispatch(resetAction_1.resetAuthUser);
    };
    var handleMessageCallback = react_1.useCallback(function () {
        react_native_1.Alert.alert(state.message, '', [
            {
                text: '확인',
                onPress: function () {
                    if (actionType === 'LOGIN') {
                        logInCallbackFunc();
                    }
                    if (actionType === 'LOGOUT') {
                        logOutCallbackFunc();
                    }
                    if (actionType === 'REGISTER/USER') {
                        registerUserCallbackFunc();
                    }
                    if (actionType === 'UPDATE/USER') {
                        updateUserCallbackFunc();
                    }
                    if (actionType === 'DELETE/USER') {
                        deleteUserCallback();
                    }
                }
            },
        ]);
    }, [state.message]);
    // alert메세지
    react_1.useEffect(function () {
        if (typeof state.status === 'number' && typeof state.message === 'string') {
            if (state.status === 200 || state.status === 400) {
                handleMessageCallback();
            }
        }
    }, [state.status, state.message]);
}
exports["default"] = useAlertMessage;
