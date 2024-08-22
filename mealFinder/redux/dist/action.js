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
exports.KaKaoLogOutUser = exports.KaKaoLoginUser = exports.withDrawUser = exports.updateUserNickName = exports.logOutUser = exports.loginUser = exports.registerUser = void 0;
var api_1 = require("@/api");
var toolkit_1 = require("@reduxjs/toolkit");
exports.registerUser = toolkit_1.createAsyncThunk('REGISTER', function (_a) {
    var username = _a.username, email = _a.email, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, jsonData, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api_1.createUser, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ username: username, email: email, password: password })
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _b.sent();
                    return [2 /*return*/, __assign(__assign({}, jsonData), { email: email,
                            username: username,
                            password: password })];
                case 3:
                    err_1 = _b.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
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
exports.logOutUser = toolkit_1.createAsyncThunk('LOGOUT', function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(api_1.signOutUser, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: email })
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                err_3 = _a.sent();
                console.error(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.updateUserNickName = toolkit_1.createAsyncThunk('UPDATE/USERNAME', function (_a) {
    var email = _a.email, username = _a.username;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, jsonData, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api_1.updateUserName, {
                            method: 'put',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: email, username: username })
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _b.sent();
                    return [2 /*return*/, jsonData];
                case 3:
                    err_4 = _b.sent();
                    console.error(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
exports.withDrawUser = toolkit_1.createAsyncThunk('DELETE', function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(api_1.deleteUser, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: email })
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
            case 3:
                err_5 = _a.sent();
                console.error(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.KaKaoLoginUser = toolkit_1.createAsyncThunk('KAKAO/LOGIN', function (_a) {
    var kakaoId = _a.kakaoId, kakaoEmail = _a.kakaoEmail, kakaoNickName = _a.kakaoNickName, profileImageUrl = _a.profileImageUrl, thumbnailImageUrl = _a.thumbnailImageUrl;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, result, err_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api_1.kakaoSignIn, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                kakaoId: kakaoId,
                                kakaoEmail: kakaoEmail,
                                kakaoNickName: kakaoNickName,
                                profileImageUrl: profileImageUrl,
                                thumbnailImageUrl: thumbnailImageUrl
                            }),
                            credentials: 'include'
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _b.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_6 = _b.sent();
                    console.error(err_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
exports.KaKaoLogOutUser = toolkit_1.createAsyncThunk('KAKAO/LOGOUT', function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('로그아웃데이떠엉어', data);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(api_1.kakaoSignOut, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ data: data }),
                        credentials: 'include'
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                return [2 /*return*/, result];
            case 4:
                err_7 = _a.sent();
                console.error(err_7);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
