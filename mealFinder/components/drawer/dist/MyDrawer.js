"use strict";
exports.__esModule = true;
var HomeHeader_1 = require("@/components/header/HomeHeader");
var Home_1 = require("@/screen/Home");
var MyInterest_1 = require("@/screen/MyInterest");
var Profile_1 = require("@/screen/Profile");
var drawer_1 = require("@react-navigation/drawer");
var react_1 = require("react");
var Drawer = drawer_1.createDrawerNavigator();
function MyDrawer(_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(Drawer.Navigator, { initialRouteName: "Home", screenOptions: {
            headerTitleAlign: 'center',
            drawerStyle: {
                backgroundColor: '#EAEAEA',
                width: 200
            }
        } },
        react_1["default"].createElement(Drawer.Screen, { name: "Home", component: Home_1["default"], options: {
                headerTitle: function () { return react_1["default"].createElement(HomeHeader_1["default"], { navigation: navigation }); }
            } }),
        react_1["default"].createElement(Drawer.Screen, { name: "Profile", component: Profile_1["default"] }),
        react_1["default"].createElement(Drawer.Screen, { name: "MyInterest", component: MyInterest_1["default"] })));
}
exports["default"] = MyDrawer;
