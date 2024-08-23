"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var SignButton_1 = require("@/components/button/SignButton");
var NavigationInput_1 = require("@/components/input/NavigationInput");
var useAlertMessage_1 = require("@/hooks/useAlertMessage");
var useLogOut_1 = require("@/hooks/useLogOut");
var useWithDrawal_1 = require("@/hooks/useWithDrawal");
var profile_style_1 = require("@/styles/screen/profile_style");
var faBowlFood_1 = require("@fortawesome/free-solid-svg-icons/faBowlFood");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var native_1 = require("@react-navigation/native");
function Profile() {
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var deleteState = react_redux_1.useSelector(function (state) { return state.deleteUserReducer; });
    var navigation = native_1.useNavigation();
    var handleLogOut = useLogOut_1["default"]();
    var handleWithDrawal = useWithDrawal_1["default"]();
    // const handleWithDrawal = async () => {
    //   const data = await getItemFromStorage('user');
    //   dispatch(withDrawUser(data.email));
    // };
    useAlertMessage_1["default"]({
        state: { message: authState.logoutMessage, status: authState.logoutStatus },
        destination: 'Home',
        actionType: 'LOGOUT'
    });
    useAlertMessage_1["default"]({
        state: {
            message: deleteState.deleteUserMessage,
            status: deleteState.deleteUserStatus
        },
        destination: 'Home',
        actionType: 'DELETE/USER'
    });
    var handleMyInterest = function () {
        navigation.navigate('MyInterest');
    };
    var handleProfileEdit = function () {
        navigation.navigate('ProfileEdit');
    };
    return (react_1["default"].createElement(react_native_1.View, null, authState.id === '' ? (react_1["default"].createElement(react_native_1.View, { style: profile_style_1.styles.beforeLoginUserContainer },
        react_1["default"].createElement(react_native_1.Button, { title: "\uB85C\uADF8\uC778\uC744\uD574\uC8FC\uC138\uC694", onPress: function () { return navigation.navigate('SignIn'); } }))) : (react_1["default"].createElement(react_native_1.View, { style: profile_style_1.styles.loginUserContainer },
        react_1["default"].createElement(react_native_1.View, { style: profile_style_1.styles.introduceContainer },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { size: 80, icon: faBowlFood_1.faBowlFood })),
            react_1["default"].createElement(react_native_1.Text, { style: profile_style_1.styles.greetingText },
                authState.username,
                "\uB2D8 \uC548\uB155\uD558\uC138\uC694 \uBC18\uAC11\uC2B5\uB2C8\uB2E4")),
        react_1["default"].createElement(NavigationInput_1["default"], { title: "\uB0B4\uAC00 \uAD00\uC2EC\uC788\uC5B4\uD558\uB294 \uD0A4\uC6CC\uB4DC\uBCF4\uB7EC\uAC00\uAE30", onPress: handleMyInterest }),
        react_1["default"].createElement(NavigationInput_1["default"], { title: "\uB0B4 \uC815\uBCF4 \uC218\uC815\uD558\uB7EC\uAC00\uAE30", onPress: handleProfileEdit }),
        react_1["default"].createElement(react_native_1.View, { style: profile_style_1.styles.button_container },
            react_1["default"].createElement(SignButton_1["default"], { title: "\uB85C\uADF8\uC544\uC6C3\uD558\uAE30", onPress: handleLogOut }),
            react_1["default"].createElement(SignButton_1["default"], { title: "\uD68C\uC6D0\uD0C8\uD1F4\uD558\uAE30", onPress: handleWithDrawal }))))));
}
exports["default"] = Profile;
