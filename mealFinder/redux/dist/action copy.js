"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.resetDeleteUser = exports.withDrawUser = exports.resetUpdateUser = exports.updateUser = exports.findSpecificUser = exports.resetUser = exports.logOutUser = exports.loginUser = exports.resetRegisterUser = exports.registerUser = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var api_1 = require("../utils/api");
exports.registerUser = toolkit_1.createAsyncThunk('REGISTER', function (_a) {
    var username = _a.username, email = _a.email, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch(api_1.createUser, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ username: username, email: email, password: password })
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.json().then(function (data) {
                            return __assign(__assign({}, data), { email: email,
                                username: username,
                                password: password });
                        })];
                case 2:
                    err_1 = _b.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.resetRegisterUser = {
    type: 'REGISTER/reset'
};
exports.loginUser = toolkit_1.createAsyncThunk('LOGIN', function (_a) {
    var email = _a.email, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, result, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api_1.signInUser, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: email, password: password }),
                            credentials: 'include'
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _b.sent();
                    return [2 /*return*/, __assign(__assign({}, result), { email: email,
                            password: password })];
                case 3:
                    err_2 = _b.sent();
                    console.error(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
exports.logOutUser = toolkit_1.createAsyncThunk('LOGOUT', function (_a) {
    var email = _a.email;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, result, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api_1.signOutUser, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: email })
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _b.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_3 = _b.sent();
                    console.error(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
exports.resetUser = {
    type: 'RESET'
};
exports.findSpecificUser = toolkit_1.createAsyncThunk('FINCSPECIFICUSER', function (_a) {
    var email = _a.email, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch(api_1.findOutUser, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: email, password: password })
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.json().then(function (data) { return data; })];
                case 2:
                    err_4 = _b.sent();
                    console.error(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
// update프로필
exports.updateUser = toolkit_1.createAsyncThunk('UPDATE', function (_a) {
    var email = _a.email, username = _a.username, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, err_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch(api_1.updateUserProfile, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                email: email,
                                newUsername: username,
                                newPassword: password
                            })
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.json().then(function (data) {
                            return __assign(__assign({}, data), { email: email,
                                username: username,
                                password: password });
                        })];
                case 2:
                    err_5 = _b.sent();
                    console.error(err_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.resetUpdateUser = {
    type: 'UPDATE/reset'
};
exports.withDrawUser = toolkit_1.createAsyncThunk('DELETE', function (_a) {
    var email = _a.email;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, err_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch(api_1.deleteUser, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: email })
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.json().then(function (data) { return data; })];
                case 2:
                    err_6 = _b.sent();
                    console.error(err_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.resetDeleteUser = {
    type: 'DELETE/reset'
};
