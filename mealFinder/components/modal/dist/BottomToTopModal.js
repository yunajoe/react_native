"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var searchAction_1 = require("../../redux/searchAction");
var DeleteConfirmModal_1 = require("./DeleteConfirmModal");
var BottomToTopModal = function (_a) {
    var visible = _a.visible, onClose = _a.onClose;
    var animation = react_1.useState(new react_native_1.Animated.Value(0))[0];
    var searchState = react_redux_1.useSelector(function (state) { return state.searchReducer; });
    var dispatch = react_redux_1.useDispatch();
    // 팝업창이 나타날 때 애니메이션을 적용합니다.
    //   start는 animation이후, 실행할 콜백이다
    var slideIn = react_1.useCallback(function () {
        react_native_1.Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(function () {
            // console.log('slideIn이 끗났다');
        });
    }, []);
    // 팝업창이 사라질 때 애니메이션을 적용합니다.
    var slideOut = react_1.useCallback(function () {
        react_native_1.Animated.timing(animation, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        }).start(function () {
            // console.log('slideOut이 끗났다');
        });
    }, []);
    // 팝업창이 나타날 때 애니메이션을 적용합니다.
    react_1["default"].useEffect(function () {
        if (visible) {
            slideIn();
        }
        else {
            slideOut();
        }
    }, [visible]);
    // 애니메이션을 적용합니다.
    var translateY = animation.interpolate({
        // 0일때, 즉, slideIn일떄 output result가 900까지 가야한다
        inputRange: [0, 1],
        outputRange: [800, 0]
    });
    var handleSelectedDeleteFunc = function () {
        dispatch(searchAction_1.selectedDeleteFunc(true));
        onClose();
    };
    var handleWholeDeleteFunc = function () {
        dispatch(searchAction_1.wholeDeleteFunc(true));
    };
    return (react_1["default"].createElement(react_native_1.Modal, { visible: visible, 
        //   true라고 하면은 뒷배경이 보인다. false는 뒷배경이 안보이게 됨
        transparent: true, animationType: "none", onRequestClose: onClose },
        searchState.isWholeDeleteButtonClick && (react_1["default"].createElement(DeleteConfirmModal_1["default"], { onClose: onClose })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.container, activeOpacity: 1, onPress: onClose },
            react_1["default"].createElement(react_native_1.Animated.View, { style: [styles.modalContainer, { transform: [{ translateY: translateY }] }] },
                react_1["default"].createElement(react_native_1.View, { style: styles.deleteIndividual },
                    react_1["default"].createElement(react_native_1.Pressable, { onPress: handleSelectedDeleteFunc },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "\uC120\uD0DD \uC0AD\uC81C"))),
                react_1["default"].createElement(react_native_1.View, { style: styles.deleteWhole },
                    react_1["default"].createElement(react_native_1.Pressable, { onPress: handleWholeDeleteFunc },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.text }, "\uC804\uCCB4 \uC0AD\uC81C")))))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        backgroundColor: '#E8DFCA',
        paddingTop: 30,
        paddingBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    //   선택삭제
    deleteIndividual: {
        marginBottom: 10
    },
    deleteWhole: {
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black',
        fontWeight: '300',
        marginLeft: 10
    }
});
exports["default"] = BottomToTopModal;
