"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var FilterContext_1 = require("../../context/FilterContext");
var native_1 = require("@react-navigation/native");
function DataWrapper(_a) {
    var data = _a.data;
    var navigation = native_1.useNavigation();
    var _b = react_1.useState([]), pageData = _b[0], setPageData = _b[1];
    var _c = react_1.useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = react_1.useState({ width: 0, height: 0 }), size = _d[0], setSize = _d[1];
    var setFilterData = react_1.useContext(FilterContext_1.FilterContext).setFilterData;
    var totalPage = (data === null || data === void 0 ? void 0 : data.length) > 0 && Math.ceil(data.length / 6);
    var handlePrevPage = function () {
        var copyData = __spreadArrays(data);
        if (currentPage === 1)
            return;
        setCurrentPage(currentPage - 1);
        var resultData = copyData.slice((currentPage - 1) * 6 - 6, (currentPage - 1) * 6);
        setPageData(resultData);
    };
    var handleNextPage = function () {
        var copyData = __spreadArrays(data);
        if (currentPage === totalPage)
            return;
        setCurrentPage(currentPage + 1);
        var resultData = copyData.slice(currentPage * 6, currentPage * 6 + 6);
        setPageData(resultData);
    };
    var handleWholePage = function () {
        navigation.navigate('FilteredFood');
    };
    react_1.useEffect(function () {
        var copyData = __spreadArrays(data);
        var eachScreenData = copyData.slice(0, 6);
        setPageData(eachScreenData);
        setFilterData(data);
        setCurrentPage(1);
    }, [data, setFilterData]);
    var handleLayout = function (event) {
        var _a = event.nativeEvent.layout, width = _a.width, height = _a.height;
        setSize({ width: width, height: height });
    };
    var width = size.width, height = size.height;
    var eachItemWidth = Math.floor(width / 3); // 124
    var eachItemHeight = Math.floor(height / 2); // 186
    return (react_1["default"].createElement(react_1["default"].Fragment, null, data.length > 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: filterStyle.sectionContainer },
            react_1["default"].createElement(react_native_1.View, { style: filterStyle.sectionTitle },
                react_1["default"].createElement(react_native_1.Text, { style: filterStyle.text }, "\uC804\uCCB4\uBCF4\uAE30"),
                react_1["default"].createElement(react_native_1.Pressable, { onPress: handleWholePage },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight, size: 24 }))),
            react_1["default"].createElement(react_native_1.View, { style: filterStyle.filteredContainer, onLayout: handleLayout },
                react_1["default"].createElement(react_native_gesture_handler_1.FlatList, { numColumns: 3, data: pageData, renderItem: function (_a) {
                        var item = _a.item;
                        var strMeal = item.strMeal, strMealThumb = item.strMealThumb;
                        var previewImage = "" + strMealThumb + '/preview';
                        return (react_1["default"].createElement(react_native_1.View, { style: [
                                filterStyle.previewItem,
                                { width: eachItemWidth, height: eachItemHeight },
                            ] },
                            react_1["default"].createElement(react_native_1.View, { style: filterStyle.titleAndPic },
                                react_1["default"].createElement(react_native_1.Text, { style: filterStyle.mealTitle }, strMeal),
                                react_1["default"].createElement(react_native_1.Image, { style: filterStyle.previewImage, source: {
                                        uri: previewImage
                                    } }))));
                    } }))),
        react_1["default"].createElement(react_native_1.View, { style: filterStyle.navigation },
            react_1["default"].createElement(react_native_1.Pressable, { onPress: handlePrevPage },
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft, size: 24 })),
            react_1["default"].createElement(react_native_1.Text, null,
                currentPage,
                " / ",
                totalPage),
            react_1["default"].createElement(react_native_1.Pressable, { onPress: handleNextPage },
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRight, size: 24 }))))) : (react_1["default"].createElement(react_native_1.View, { style: filterStyle.spinner },
        react_1["default"].createElement(react_native_1.ActivityIndicator, null)))));
}
exports["default"] = DataWrapper;
var filterStyle = react_native_1.StyleSheet.create({
    sectionContainer: {
        marginTop: 50,
        // backgroundColor: 'white',
        padding: 10
    },
    sectionTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    // applyFilter를 누르면은 나오는 result
    filteredContainer: {
        height: 300
    },
    titleAndPic: {
        position: 'relative'
    },
    mealTitle: {
        position: 'absolute',
        top: 0,
        color: 'black',
        zIndex: 1,
        fontWeight: 'bold'
    },
    previewItem: {
        width: 150
    },
    previewImage: {
        width: '100%',
        height: '100%',
        opacity: 0.9
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 15,
        // backgroundColor: 'green',
        padding: 5
    },
    spinner: {
        marginTop: 10,
        marginBottom: 10
    }
});
