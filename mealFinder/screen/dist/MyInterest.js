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
var storage_1 = require("../utils/storage");
var react_redux_1 = require("react-redux");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var SearchedItem_1 = require("../components/item/SearchedItem");
var BottomToTopModal_1 = require("../components/modal/BottomToTopModal");
var searchAction_1 = require("../redux/searchAction");
var ThemeContext_1 = require("../context/ThemeContext");
function MyInterest() {
    var _a = react_1.useState([]), dataArr = _a[0], setDataArr = _a[1];
    var _b = react_1.useState(false), isOpenModal = _b[0], setIsOpenModal = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var authState = react_redux_1.useSelector(function (state) { return state.authReducer; });
    var searchState = react_redux_1.useSelector(function (state) { return state.searchReducer; });
    var _c = react_1.useContext(ThemeContext_1.ThemeContext), theme = _c.theme, setToggleFunction = _c.setToggleFunction;
    console.log('MYINTEREST컴퍼넌트입니다', theme);
    react_1.useEffect(function () {
        storage_1.getItemFromStorage(authState.email).then(function (data) {
            if (data !== null) {
                setDataArr(__spreadArrays(data));
            }
        });
    }, [
        searchState.insertSearchItemArr.length,
        searchState.deletedSearchedItemArr.length,
        searchState.isWholeItemDelete,
    ]);
    // 처음에는 이전에 있는 아이템이 rendering. 즉 dispatch에서 삭제되어 state에들어온것 arr가  return되지 않는다
    var handleModal = function () {
        setIsOpenModal(!isOpenModal);
    };
    var handleModalCloseFunc = function () {
        setIsOpenModal(false);
    };
    var handleDeleteCompletedFunc = function () {
        dispatch(searchAction_1.selectedDeleteFunc(false));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        dataArr.length > 0 && (react_1["default"].createElement(react_native_1.View, { style: styles.recentContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.recentContainerLabel },
                react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "\uCD5C\uADFC\uAC80\uC0C9\uC5B4"),
                searchState.isSelectedDeleteButtonClick ? (react_1["default"].createElement(react_native_1.Pressable, { onPress: handleDeleteCompletedFunc },
                    react_1["default"].createElement(react_native_1.Text, null, "\uC0AD\uC81C \uC644\uB8CC"))) : (react_1["default"].createElement(react_native_1.Pressable, { onPress: handleModal },
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsisVertical, size: 24 })))),
            react_1["default"].createElement(react_native_1.View, { style: styles.itemContainer },
                react_1["default"].createElement(react_native_gesture_handler_1.FlatList, { data: dataArr, renderItem: function (_a) {
                        var index = _a.index, item = _a.item;
                        // key로 prop을 내리면 undfined가 된다.
                        // 그라구 index={index}로 안하구
                        return react_1["default"].createElement(SearchedItem_1["default"], { key: index, name: item });
                    }, horizontal: true })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.recommendedContainer },
            react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "\uCD94\uCC9C\uAC80\uC0C9\uC5B4")),
        react_1["default"].createElement(BottomToTopModal_1["default"], { visible: isOpenModal, onClose: handleModalCloseFunc })));
}
exports["default"] = MyInterest;
var styles = react_native_1.StyleSheet.create({
    container: {},
    recentContainer: {
        backgroundColor: '#FFFFFF'
    },
    recentContainerLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 10
    },
    recommendedContainer: {
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    itemContainer: {
        marginBottom: 10,
        padding: 10
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    }
});
