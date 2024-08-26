"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var LinkButton = function (props) {
    var navigation = native_1.useNavigation();
    var children = props.children, to = props.to, item = props.item, data = props.data, action = props.action;
    return (react_1["default"].createElement(react_native_1.Pressable, { onPress: function () {
            return navigation.navigate('FoodDetail', {
                strId: to.params.strId,
                data: data
            });
        }, style: function (_a) {
            var pressed = _a.pressed;
            return [
                {
                    backgroundColor: pressed
                        ? 'rgba(0, 0, 0, 0.7)'
                        : 'rgba(10, 68, 18, 0.9)',
                    opacity: pressed ? 0.8 : 0
                },
                styles.textContainer,
            ];
        } }, function (_a) {
        var pressed = _a.pressed;
        return (react_1["default"].createElement(react_native_1.Text, { style: [styles.text, { color: pressed ? 'white' : 'transparent' }] }, children));
    }));
};
function Food(_a) {
    var data = _a.data;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.FlatList, { columnWrapperStyle: styles.columnContainer, numColumns: 2, keyExtractor: function (item) { return item.idMeal; }, data: data, renderItem: function (_a) {
                var item = _a.item;
                var idMeal = item.idMeal, strMeal = item.strMeal, strMealThumb = item.strMealThumb;
                return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
                    react_1["default"].createElement(react_native_1.View, { style: [styles.ImageContainer] },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: strMealThumb }, style: styles.image })),
                    react_1["default"].createElement(LinkButton, { data: data, item: item, to: {
                            screen: 'FoodDetail',
                            params: { strId: idMeal }
                        } }, strMeal)));
            } })));
}
var styles = react_native_1.StyleSheet.create({
    container: {
        position: 'relative'
    },
    columnContainer: {
        columnGap: 10,
        rowGap: 10
    },
    ImageContainer: {
        width: 200,
        height: 200,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 2
    },
    textContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderWidth: 4,
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
exports["default"] = Food;
