"use strict";
exports.__esModule = true;
var useAlertMessage_1 = require("@/hooks/useAlertMessage");
var action_1 = require("@/redux/action");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
// const {KaKaoModule} = NativeModules;
var KaKaoModule = react_native_1.NativeModules.KaKaoModule;
function SignIn() {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var navigation = native_1.useNavigation();
    var dispatch = react_redux_1.useDispatch();
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
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
    useAlertMessage_1["default"]({
        state: { message: authState.loginMessage, status: authState.loginStatus },
        destination: 'Home',
        actionType: 'LOGIN'
    });
    // 소셜 로그인
    var handleKaKaoLogin = function () {
        console.log('KaKaoModule', KaKaoModule.add, KaKaoModule.getKaKaoLogin);
        KaKaoModule.add(1, 10, function (sum) {
            console.log('나는야합', sum);
        });
        KaKaoModule.getKaKaoLogin();
    };
    var handleGoogleLogin = function () { };
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
        // width: 132,
        // height: 132,
        // borderRadius: 100,
        overflow: 'hidden',
        height: 37,
        marginBottom: 10
    }
});
