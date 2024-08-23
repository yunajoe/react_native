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
var ChangeEmailButton_1 = require("@/components/button/ChangeEmailButton");
var EditScreenLayout_1 = require("@/components/layout/EditScreenLayout");
var action_1 = require("@/redux/action");
var store_1 = require("@/redux/store");
var native_1 = require("@react-navigation/native");
function ChangeEmail() {
    var _this = this;
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var dispatch = store_1.useAppDispatch();
    var navigation = native_1.useNavigation();
    var handleUserInfo = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(action_1.getUserInfo(authState.id));
            return [2 /*return*/];
        });
    }); };
    var onPress = function () {
        console.log('대표 이메일을 변경합니다');
        navigation.navigate('RegisterEmail');
    };
    return (react_1["default"].createElement(EditScreenLayout_1["default"], null,
        react_1["default"].createElement(ChangeEmailButton_1["default"], { type: "general", onPress: handleUserInfo, email: authState.email }),
        react_1["default"].createElement(react_native_1.View, { style: styles.email_add_container },
            react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: onPress },
                react_1["default"].createElement(react_native_1.View, { style: styles.text_container },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "\uC774\uBA54\uC77C \uC9C1\uC811 \uB4F1\uB85D\uD558\uAE30"))))));
}
exports["default"] = ChangeEmail;
var styles = react_native_1.StyleSheet.create({
    email_add_container: {
        backgroundColor: 'rgba(25, 2, 14, 0.18)',
        width: 160,
        marginTop: 50,
        padding: 10,
        borderRadius: 100
    },
    text_container: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        color: 'black'
    }
});
