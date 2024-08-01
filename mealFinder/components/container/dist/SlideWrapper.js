"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function SlideWrapper(_a) {
    var data = _a.data;
    var _b = react_1.useState(0), index = _b[0], setIndex = _b[1];
    var _c = react_1.useState({ width: 0, height: 0 }), size = _c[0], setSize = _c[1];
    var _d = react_native_1.useWindowDimensions(), height = _d.height, width = _d.width;
    var transAnim = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var _e = react_native_1.useWindowDimensions(), windowWidth = _e.width, windowHeight = _e.height;
    windowHeight = windowHeight - 300;
    react_1.useEffect(function () {
        react_native_1.Animated.timing(transAnim, {
            toValue: 1,
            delay: 2500,
            duration: 1000,
            easing: react_native_1.Easing.ease,
            useNativeDriver: true
        }).start();
    }, [transAnim]);
    return react_1["default"].createElement(react_native_1.View, { style: styles.container });
}
exports["default"] = SlideWrapper;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slideContainer: {},
    slide: {
        width: 10
    }
});
