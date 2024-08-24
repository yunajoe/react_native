"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var filterIndredient_1 = require("@/utils/filterIndredient");
function RandomFood(_a) {
    var data = _a.data;
    var randomMeal = data[0];
    var strMeal = randomMeal.strMeal, strMealThumb = randomMeal.strMealThumb, strCategory = randomMeal.strCategory, strArea = randomMeal.strArea, strInstructions = randomMeal.strInstructions;
    var ingredientArr = filterIndredient_1.filterIngredient(randomMeal);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles.scrollView },
            react_1["default"].createElement(react_native_1.Text, { style: styles.text }, strMeal),
            react_1["default"].createElement(react_native_1.Image, { source: { uri: strMealThumb }, style: styles.image }),
            react_1["default"].createElement(react_native_1.View, { style: styles.mealInfo },
                react_1["default"].createElement(react_native_1.Text, { style: styles.text }, strCategory),
                react_1["default"].createElement(react_native_1.Text, { style: styles.text }, strArea)),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.Instruction }, strInstructions),
                react_1["default"].createElement(react_native_1.Text, { style: styles.IngredientTitle }, "Ingredients")),
            react_1["default"].createElement(react_native_1.View, { style: styles.IngredientArr }, ingredientArr.map(function (item, idx) { return (react_1["default"].createElement(react_native_1.Text, { key: idx, style: styles.item }, item)); })))));
}
var styles = react_native_1.StyleSheet.create({
    container: {
        margin: 10,
        flex: 1
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 300,
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 2
    },
    mealInfo: {
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#e09850',
        borderStyle: 'dashed',
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 5
    },
    scrollView: {
        flexGrow: 1
    },
    Instruction: {
        color: '#fff',
        textAlign: 'center'
    },
    IngredientArr: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    IngredientTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    item: {
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginRight: 5,
        marginBottom: 5
    }
});
exports["default"] = RandomFood;
