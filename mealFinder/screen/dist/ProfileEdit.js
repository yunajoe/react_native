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
var check_1 = require("@/api/check");
var profile_edit_style_1 = require("@/styles/screen/profile_edit_style");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
function ProfileEdit() {
    var _this = this;
    var _a = react_1.useState(''), password = _a[0], setPassword = _a[1];
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var navigation = native_1.useNavigation();
    var handleConFirm = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, status, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, check_1.handleCheckByEmailAndPassword(authState.email, password)];
                case 1:
                    _a = _b.sent(), status = _a.status, message = _a.message;
                    if (status === 400) {
                        return [2 /*return*/, react_native_1.Alert.alert(message)];
                    }
                    if (status === 200) {
                        navigation.navigate('NewProfile');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: profile_edit_style_1.styles.container },
        react_1["default"].createElement(react_native_1.View, { style: profile_edit_style_1.styles.textContainer },
            react_1["default"].createElement(react_native_1.Text, null, "\uBE44\uBC00\uBC88\uD638\uC7AC\uD655\uC778"),
            react_1["default"].createElement(react_native_1.Text, null, "\uD68C\uC6D0\uB2D8\uC758 \uC815\uBCF4\uB97C \uC548\uC804\uD558\uAC8C \uBCF4\uD638\uD558\uAE30 \uC704\uD574 \uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uD55C\uBC88 \uC785\uB825\uD558\uAC8C\uD574\uC8FC\uC138\uC694")),
        react_1["default"].createElement(react_native_1.View, { style: profile_edit_style_1.styles.emailContainer },
            react_1["default"].createElement(react_native_1.Text, { style: profile_edit_style_1.styles.emailLabel }, "\uC774\uBA54\uC77C"),
            react_1["default"].createElement(react_native_1.TextInput, { style: profile_edit_style_1.styles.input, value: authState.email, readOnly: true })),
        react_1["default"].createElement(react_native_1.View, { style: profile_edit_style_1.styles.passwordContainer },
            react_1["default"].createElement(react_native_1.Text, { style: profile_edit_style_1.styles.passwordLabel }, "\uBE44\uBC00\uBC88\uD638"),
            react_1["default"].createElement(react_native_1.TextInput, { style: profile_edit_style_1.styles.input, value: password, onChangeText: setPassword })),
        react_1["default"].createElement(react_native_1.Button, { title: "\uD655\uC778", onPress: handleConFirm })));
}
exports["default"] = ProfileEdit;
// const styles = StyleSheet.create({
//   container: {
//     margin: 8,
//   },
//   textContainer: {
//     marginBottom: 20,
//   },
//   emailContainer: {
//     marginBottom: 20,
//   },
//   emailLabel: {
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     marginBottom: 20,
//   },
//   passwordLabel: {
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
