"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var authReducer_1 = require("./authReducer");
var createUserReducer_1 = require("./createUserReducer");
var deleteUserReducer_1 = require("./deleteUserReducer");
var searchReducer_1 = require("./searchReducer");
var updateUserReducer_1 = require("./updateUserReducer");
var reducer = redux_1.combineReducers({
    authReducer: authReducer_1["default"],
    createUserReducer: createUserReducer_1["default"],
    updateUserReducer: updateUserReducer_1["default"],
    deleteUserReducer: deleteUserReducer_1["default"],
    searchReducer: searchReducer_1["default"]
});
exports["default"] = reducer;
