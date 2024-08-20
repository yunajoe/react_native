"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var change_email_button_1 = require("@/styles/button/change_email_button");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
function ChangeEmailButton(_a) {
    var onPress = _a.onPress, email = _a.email, type = _a.type;
    return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: onPress },
        react_1["default"].createElement(react_native_1.View, { style: change_email_button_1.styles.button },
            react_1["default"].createElement(react_native_1.View, { style: change_email_button_1.styles.user_info },
                react_1["default"].createElement(react_native_1.Text, null, email),
                type === 'general' ? (react_1["default"].createElement(react_native_1.View, { style: change_email_button_1.styles.email },
                    react_1["default"].createElement(MaterialIcons_1["default"], { name: "email", size: 12, color: "fff" }),
                    react_1["default"].createElement(react_native_1.Text, null, "\uC774\uBA54\uC77C"))) : (react_1["default"].createElement(react_native_1.View, { style: change_email_button_1.styles.email },
                    react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "message", size: 12, color: "#FFD700" }),
                    react_1["default"].createElement(react_native_1.Text, null, "\uCE74\uCE74\uC624\uD1A1")))),
            react_1["default"].createElement(react_native_1.View, { style: change_email_button_1.styles.radio_icon },
                react_1["default"].createElement(MaterialIcons_1["default"], { name: "radio-button-checked", size: 28, color: "fff" })))));
}
exports["default"] = ChangeEmailButton;
