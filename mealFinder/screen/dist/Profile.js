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
var SignButton_1 = require("@/components/button/SignButton");
var NavigationInput_1 = require("@/components/input/NavigationInput");
var useAlertMessage_1 = require("@/hooks/useAlertMessage");
var action_1 = require("@/redux/action");
var store_1 = require("@/redux/store");
var profile_style_1 = require("@/styles/screen/profile_style");
var storage_1 = require("@/utils/storage");
var faBowlFood_1 = require("@fortawesome/free-solid-svg-icons/faBowlFood");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var native_1 = require("@react-navigation/native");
function Profile() {
    var _this = this;
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var deleteState = react_redux_1.useSelector(function (state) { return state.deleteUserReducer; });
    var navigation = native_1.useNavigation();
    var dispatch = store_1.useAppDispatch();
    var handleLogOut = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.getItemFromStorage('user')];
                case 1:
                    data = _a.sent();
                    dispatch(action_1.logOutUser(data.email));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleWithDrawal = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.getItemFromStorage('user')];
                case 1:
                    data = _a.sent();
                    dispatch(action_1.withDrawUser(data.email));
                    return [2 /*return*/];
            }
        });
    }); };
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
