"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var FilterButton_1 = require("../components/button/FilterButton");
var FilterCategory_1 = require("./FilterCategory");
var CategoryItem_1 = require("../components/item/CategoryItem");
var DataWrapper_1 = require("../components/container/DataWrapper");
var useFetch_1 = require("../hooks/useFetch");
var api_1 = require("../utils/api");
var filterScreen_1 = require("../utils/filterScreen");
var NonDataWrapper_1 = require("../components/container/NonDataWrapper");
function FoodFilter() {
    var _this = this;
    // user가 선택하면은 넣을 곳
    var _a = react_1.useState(''), cateGory = _a[0], setCateGory = _a[1];
    var _b = react_1.useState(''), area = _b[0], setArea = _b[1];
    var _c = react_1.useState([]), data = _c[0], setData = _c[1];
    var _d = react_1.useState(-1), cateGoryIndex = _d[0], setCategoryIndex = _d[1];
    var _e = react_1.useState(-1), areaIndex = _e[0], setAreaIndex = _e[1];
    // filter링 버튼 누르기 전
    var _f = react_1.useState(false), isFilterStart = _f[0], setIsFilteringStart = _f[1];
    // category를 택하는 펑션
    var handleCategoryFilter = function (text) {
        setCateGory(text);
    };
    // area를 택하는 펑션
    var handleAreaFilter = function (text) {
        setArea(text);
    };
    var handleTheSameIndex = function () {
        setCategoryIndex(-1);
        handleCategoryFilter('');
    };
    var handleTheDifferentIndex = function (index, item) {
        setCategoryIndex(index);
        handleCategoryFilter(item);
    };
    var areaHandleTheSameIndex = function () {
        setAreaIndex(-1);
        handleAreaFilter('');
    };
    var areaHandleTheDifferentIndex = function (index, item) {
        setAreaIndex(index);
        handleAreaFilter(item);
    };
    // hook불러오기
    var _g = useFetch_1["default"]({
        url: api_1.categoryURL,
        keyword: cateGory
    }), fetchCateGoryDataFunc = _g.fetchDataFunc, isCateGoryDataLoading = _g.isDataLoading;
    var _h = useFetch_1["default"]({
        url: api_1.areaURL,
        keyword: area
    }), fetchAreaDataFunc = _h.fetchDataFunc, isAreaDataLoading = _h.isDataLoading;
    // category랑 area 메뉴 탭 가져오기
    var _j = FilterCategory_1["default"](), totalData = _j.totalData, isLoading = _j.isLoading;
    var handleApplyFilter = function () { return __awaiter(_this, void 0, void 0, function () {
        var result, result, arr1, arr2, data1, data2, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (cateGory.length === 0 && area.length === 0) {
                        react_native_1.Alert.alert('최소 한 개 이상 선택해주세요');
                        return [2 /*return*/];
                    }
                    // 필터링화면 시작!
                    setIsFilteringStart(true);
                    if (!(cateGory.length > 0 && area.length === 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchCateGoryDataFunc()];
                case 1:
                    result = _a.sent();
                    setData(result.meals);
                    _a.label = 2;
                case 2:
                    if (!(area.length > 0 && cateGory.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetchAreaDataFunc()];
                case 3:
                    result = _a.sent();
                    setData(result.meals);
                    _a.label = 4;
                case 4:
                    if (!(area.length > 0 && cateGory.length > 0)) return [3 /*break*/, 7];
                    return [4 /*yield*/, fetchCateGoryDataFunc()];
                case 5:
                    arr1 = _a.sent();
                    return [4 /*yield*/, fetchAreaDataFunc()];
                case 6:
                    arr2 = _a.sent();
                    data1 = arr1.meals;
                    data2 = arr2.meals;
                    result = filterScreen_1.combinedData({ data1: data1, data2: data2 });
                    setData(result);
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); };
    // clearButton
    var handleClear = function () {
        // 필터링화면 없앰!
        setIsFilteringStart(false);
        setCategoryIndex(-1);
        setAreaIndex(-1);
        setCateGory('');
        setArea('');
        setData([]);
    };
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.spinner },
            react_1["default"].createElement(react_native_1.ActivityIndicator, null)));
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.SectionList, { sections: totalData, renderItem: function () { return null; }, renderSectionHeader: function (_a) {
                    var section = _a.section;
                    var data = section.data, title = section.title;
                    return (react_1["default"].createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.sectionTitle }, title),
                        react_1["default"].createElement(react_native_1.FlatList, { horizontal: true, data: data, renderItem: function (_a) {
                                var index = _a.index, item = _a.item;
                                if (title === 'Category') {
                                    return (react_1["default"].createElement(CategoryItem_1["default"], { item: item, sameIndexFunc: handleTheSameIndex, differentIndexFunc: handleTheDifferentIndex, index: index, selectedIndex: cateGoryIndex }));
                                }
                                if (title === 'Area') {
                                    return (react_1["default"].createElement(CategoryItem_1["default"], { item: item, sameIndexFunc: areaHandleTheSameIndex, differentIndexFunc: areaHandleTheDifferentIndex, index: index, selectedIndex: areaIndex }));
                                }
                                return null;
                            }, showsHorizontalScrollIndicator: false })));
                } })),
        isFilterStart ? react_1["default"].createElement(DataWrapper_1["default"], { data: data }) : react_1["default"].createElement(NonDataWrapper_1["default"], null),
        react_1["default"].createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1["default"].createElement(FilterButton_1["default"], { platForm: "android", title: "Clear", color: "gray", onPress: handleClear }),
            react_1["default"].createElement(FilterButton_1["default"], { platForm: "android", title: "Apply Filter", color: "gray", onPress: handleApplyFilter }))));
}
exports["default"] = FoodFilter;
var styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    section: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        marginBottom: 50,
        height: 100
    },
    buttonContainer: {
        marginTop: 50,
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center'
    },
    sectionTitle: {
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        padding: 5
    },
    title: {
        fontSize: 12
    },
    sectionContainer: {
        marginBottom: 0
    },
    // error
    spinner: {
        marginTop: 10,
        marginBottom: 10
    }
});
