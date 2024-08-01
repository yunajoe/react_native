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
var searchAction_1 = require("../../redux/searchAction");
var storage_1 = require("../../utils/storage");
function DeleteConfirmModal(_a) {
    var _this = this;
    var onClose = _a.onClose;
    var dispatch = react_redux_1.useDispatch();
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var handleDeleteWholeItem = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.getItemFromStorage(authState.email).then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, storage_1.saveNonStringItemToStorage({
                                        key: authState.email,
                                        saveValue: []
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    _a.sent();
                    dispatch(searchAction_1.wholeDeleteFunc(false));
                    dispatch(searchAction_1.deleteWholeItem());
                    dispatch(searchAction_1.deleteReset());
                    return [2 /*return*/];
            }
        });
    }); };
    var handleApprove = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('delete storgae실행 !');
                    return [4 /*yield*/, handleDeleteWholeItem()];
                case 1:
                    _a.sent();
                    console.log('dispatch와 onClose함수실행');
                    onClose();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDecline = function () {
        dispatch(searchAction_1.wholeDeleteFunc(false));
        onClose();
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Modal, { visible: true, transparent: true },
            react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "\uC815\uB9D0\uB85C \uB2E4 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.button },
                        react_1["default"].createElement(react_native_1.Button, { title: "NO", onPress: handleDecline, color: "black" })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.button },
                        react_1["default"].createElement(react_native_1.Button, { title: "YES", onPress: handleApprove, color: "black" })))))));
}
exports["default"] = DeleteConfirmModal;
var styles = react_native_1.StyleSheet.create({
    container: {
        // height: 100,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalContainer: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        zIndex: 999,
        padding: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 50
    },
    button: {
        width: 120
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }
});
