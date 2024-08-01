"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
function BackImage(_a) {
    var index = _a.index, item = _a.item, x = _a.x;
    var width = react_native_1.useWindowDimensions().width;
    var animatedStyle = react_native_reanimated_1.useAnimatedStyle(function () {
        var opacityAnim = react_native_reanimated_1.interpolate(x.value, [(index - 1) * width, index * width, (index + 1) * width], [-0.6, 1, -0.6], react_native_reanimated_1.Extrapolation.CLAMP);
        return {
            opacity: opacityAnim
        };
    });
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_reanimated_1["default"].Image, { source: item.image, style: [
                styles.absoluteFillObject,
                {
                    width: width,
                    height: width,
                    backgroundColor: 'black'
                },
                animatedStyle,
            ] })));
}
exports["default"] = BackImage;
var styles = react_native_1.StyleSheet.create({
    absoluteFillObject: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});
