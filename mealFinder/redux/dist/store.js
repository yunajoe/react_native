"use strict";
exports.__esModule = true;
exports.useAppDispatch = void 0;
var react_redux_1 = require("react-redux");
var reducer_1 = require("./reducer");
var toolkit_1 = require("@reduxjs/toolkit");
var store = toolkit_1.configureStore({
    reducer: reducer_1["default"],
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        });
    },
    devTools: process.env.NODE_ENV !== 'production'
});
exports.useAppDispatch = react_redux_1.useDispatch;
exports["default"] = store;
