"use strict";
exports.__esModule = true;
exports.MemoziedFilteredFood = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var FilterContext_1 = require("../context/FilterContext");
exports.MemoziedFilteredFood = react_1["default"].memo(function FilteredFood() {
    var filterData = react_1.useContext(FilterContext_1.FilterContext).filterData;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.FlatList, { numColumns: 2, data: filterData, renderItem: function (_a) {
                var index = _a.index, item = _a.item, separators = _a.separators;
                return (react_1["default"].createElement(react_native_1.TouchableHighlight, { key: index, onShowUnderlay: separators.highlight, onHideUnderlay: separators.unhighlight },
                    react_1["default"].createElement(react_native_1.View, { style: styles.item },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.image, source: {
                                uri: item.strMealThumb
                            } }),
                        react_1["default"].createElement(react_native_1.Text, null, item.strMeal))));
            } })));
});
exports["default"] = exports.MemoziedFilteredFood;
var styles = react_native_1.StyleSheet.create({
    container: {
        marginTop: 30
    },
    image: {
        width: '100%',
        height: 100
    },
    item: {
        width: 200,
        borderColor: 'black',
        borderWidth: 2,
        marginRight: 10
    }
});
