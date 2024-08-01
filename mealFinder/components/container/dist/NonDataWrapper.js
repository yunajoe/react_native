"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var processImages_1 = require("../../utils/processImages");
var Pagination_1 = require("../Pagination");
var BackImage_1 = require("../style/BackImage");
var SlideEffect_1 = require("../style/SlideEffect");
// 필터링 버튼 누르기 전에
function NonDataWrapper() {
    var _a = react_1.useState(processImages_1.images), data = _a[0], setData = _a[1];
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = react_1.useState(0), paginationIndex = _c[0], setPaginationIndex = _c[1];
    var ref = react_native_reanimated_1.useAnimatedRef();
    var _d = react_1.useState(true), isAutoPlay = _d[0], setIsAutoPlay = _d[1];
    var interval = react_1.useRef();
    var x = react_native_reanimated_1.useSharedValue(0);
    var offset = react_native_reanimated_1.useSharedValue(0);
    var width = react_native_1.useWindowDimensions().width;
    react_native_reanimated_1.useDerivedValue(function () {
        react_native_reanimated_1.scrollTo(ref, offset.value, 0, true);
    });
    react_1.useEffect(function () {
        if (isAutoPlay === true) {
            interval.current = setInterval(function () {
                offset.value = offset.value + width;
            }, 3000);
        }
        else {
            clearInterval(interval.current);
        }
        return function () {
            clearInterval(interval.current);
        };
    }, [isAutoPlay, offset, width]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        data.map(function (item, index) {
            return (react_1["default"].createElement(react_native_1.View, { key: index }, currentIndex === index && (react_1["default"].createElement(BackImage_1["default"], { index: index, item: item, x: x }))));
        }),
        react_1["default"].createElement(SlideEffect_1["default"], { ref: ref, x: x, offset: offset, width: width, data: data, images: processImages_1.images, setData: setData, setCurrentIndex: setCurrentIndex, setPaginationIndex: setPaginationIndex, setIsAutoPlay: setIsAutoPlay }),
        react_1["default"].createElement(Pagination_1["default"], { paginationIndex: paginationIndex })));
}
exports["default"] = NonDataWrapper;
var styles = react_native_1.StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#B6C4B6'
    },
    buttonContainer: {
        flexDirection: 'row'
    }
});
