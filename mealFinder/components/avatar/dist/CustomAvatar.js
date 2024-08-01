"use strict";
exports.__esModule = true;
var themed_1 = require("@rneui/themed");
var react_1 = require("react");
function CustomAvatar() {
    return (react_1["default"].createElement(themed_1.Avatar, { size: 64, rounded: true, source: {
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }, containerStyle: { backgroundColor: 'orange' } },
        react_1["default"].createElement(themed_1.Avatar.Accessory, { size: 24, source: {
                uri: 'https://cdn.pixabay.com/photo/2017/11/10/05/24/upload-2935442_1280.png'
            } })));
}
exports["default"] = CustomAvatar;
