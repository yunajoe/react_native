"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var food_detail_style_1 = require("@/styles/screen/food_detail_style");
var filterIndredient_1 = require("@/utils/filterIndredient");
function FoodDetail(_a) {
    var route = _a.route;
    var detailFood = route.params.data[0];
    var strMeal = detailFood.strMeal, strMealThumb = detailFood.strMealThumb, strCategory = detailFood.strCategory, strArea = detailFood.strArea, strInstructions = detailFood.strInstructions;
    var ingredientArr = filterIndredient_1.filterIngredient(detailFood);
    return (react_1["default"].createElement(react_native_1.View, { style: food_detail_style_1.styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { style: food_detail_style_1.styles.scrollView },
            react_1["default"].createElement(react_native_1.Text, { style: food_detail_style_1.styles.text }, strMeal),
            react_1["default"].createElement(react_native_1.Image, { source: { uri: strMealThumb }, style: food_detail_style_1.styles.image }),
            react_1["default"].createElement(react_native_1.View, { style: food_detail_style_1.styles.mealInfo },
                react_1["default"].createElement(react_native_1.Text, { style: food_detail_style_1.styles.text }, strCategory),
                react_1["default"].createElement(react_native_1.Text, { style: food_detail_style_1.styles.text }, strArea)),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: food_detail_style_1.styles.Instruction }, strInstructions),
                react_1["default"].createElement(react_native_1.Text, { style: food_detail_style_1.styles.IngredientTitle }, "Ingredients"),
                react_1["default"].createElement(react_native_1.View, { style: food_detail_style_1.styles.IngredientArr }, ingredientArr.map(function (item, idx) { return (react_1["default"].createElement(react_native_1.Text, { key: idx, style: food_detail_style_1.styles.item }, item)); }))))));
}
exports["default"] = FoodDetail;
