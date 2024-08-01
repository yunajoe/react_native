"use strict";
exports.__esModule = true;
// import {StackNavigation} from '@/App';
var CustomAvatar_1 = require("@/components/avatar/CustomAvatar");
var NavigationInput_1 = require("@/components/input/NavigationInput");
var user_container_style_1 = require("@/styles/container/user_container_style");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
function UserContainer() {
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var navigation = native_1.useNavigation();
    var handleNavigationToNickNameScreen = function () {
        navigation.navigate('NickNameEdit');
    };
    return (react_1["default"].createElement(react_native_1.View, { style: user_container_style_1.styles.user_container },
        react_1["default"].createElement(CustomAvatar_1["default"], null),
        react_1["default"].createElement(react_native_1.View, { style: user_container_style_1.styles.input_container },
            react_1["default"].createElement(NavigationInput_1["default"], { title: "\uB2C9\uB124\uC784", icon: free_solid_svg_icons_1.faChevronRight, data: authState.username, onPress: handleNavigationToNickNameScreen }),
            react_1["default"].createElement(NavigationInput_1["default"], { title: "\uC774\uBA54\uC77C", icon: free_solid_svg_icons_1.faChevronRight, data: authState.email, onPress: function () { return console.log('ㅎㅎㅎ'); } }),
            react_1["default"].createElement(NavigationInput_1["default"], { title: "\uBE44\uBC00\uBC88\uD638", icon: free_solid_svg_icons_1.faChevronRight, onPress: function () { return console.log('ㅎㅎㅎ'); } }))));
}
exports["default"] = UserContainer;
