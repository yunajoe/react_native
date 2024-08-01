"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;

var react_1 = require("react");

var react_native_1 = require("react-native");

var DuplicatedButton_1 = require("../components/button/DuplicatedButton");

var Seperator_1 = require("../components/seperator/Seperator"); // import {readItemFromStorage} from '../utils/storage';


var react_redux_1 = require("react-redux"); // import {checkByUserName} from '../utils/api';


var InputError_1 = require("@/components/error/InputError");

var NewProfileInput_1 = require("@/components/input/NewProfileInput");

var new_profile_style_1 = require("@/styles/screen/new_profile_style"); // import {AuthState, UpdateUserState} from '../types/reducerType';
// 이메일은 변경 x, username이랑, pwd만 바꾸는걸루!


function NewProfile() {
  var _this = this;

  var _a = react_1.useState(''),
      userName = _a[0],
      setUserName = _a[1]; // 현재 username


  var _b = react_1.useState(''),
      currentPassword = _b[0],
      setCurrentPassword = _b[1];

  var _c = react_1.useState(''),
      newPassword = _c[0],
      setNewPassword = _c[1];

  var _d = react_1.useState(''),
      newPassWorDoubleCheck = _d[0],
      setNewPassWordDoubleCheck = _d[1];

  var _e = react_1.useState(''),
      newUserName = _e[0],
      setNewUserName = _e[1];

  var _f = react_1.useState([]),
      newUserNameArr = _f[0],
      setNewUserNameArr = _f[1];

  var _g = react_1.useState({
    currentPasswordErrorMSG: '',
    newPasswordErrorMSG: [''],
    reNewPasswordErrorMSG: ''
  }),
      errorMessage = _g[0],
      setErrorMessage = _g[1];

  var _h = react_1.useState({
    currentPassword: false,
    password: true,
    username: true
  }),
      userProfileChanged = _h[0],
      setUserProfileChanged = _h[1];

  var authState = react_redux_1.useSelector(function (state) {
    return state.authReducer;
  });
  console.log('NEWPROFILE 컴퍼넌트입니닷', authState);
  var updateUserState = react_redux_1.useSelector(function (state) {
    return state.updateUserReducer;
  }); // 현재 비밀번호 INPUT관리 함수

  var handleCurrentPassWord = function handleCurrentPassWord(event) {
    var text = event.nativeEvent.text;
    var inputCurrentText = text.trim();
  }; // 새 password를 만드는 함수


  var handleNewPassWord = function handleNewPassWord(event) {
    var text = event.nativeEvent.text;
    var inputNewPassWord = text.trim();
  }; // new password를 double check하는 함수


  var handleNewPassWordReCheck = function handleNewPassWordReCheck(event) {
    var text = event.nativeEvent.text;
    var InputNewPWDCheck = text.trim();
  }; //  handleUserName
  // username이 변경이 됬을때 중복확인을 하면은 setUserProfileChange {..usernma: true를 .. 아니면 false를 return}


  var handleUserName = function handleUserName(event) {
    var text = event.nativeEvent.text;
    var InputUserName = text.trim(); // 새로 입력한 userName과 기존의 userName이 같다면은(처음에 default로 된 userNAme)

    if (InputUserName === userName) {
      setUserProfileChanged(__assign(__assign({}, userProfileChanged), {
        username: true
      }));
      return;
    }

    var lastUserName = newUserNameArr[newUserNameArr.length - 1];

    if (InputUserName !== lastUserName) {
      setUserProfileChanged(__assign(__assign({}, userProfileChanged), {
        username: false
      }));
    }
  }; // 닉네임 중복버튼


  var handleDuplicated = function handleDuplicated() {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        ];
      });
    });
  };

  var handleEditButton = function handleEditButton() {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        ];
      });
    });
  };

  return react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.container
  }, react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.introductionContainer
  }, react_1["default"].createElement(react_native_1.Text, null, "*\uB2C9\uB124\uC784 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uB9CC \uBCC0\uACBD\uAC00\uB2A5\uD569\uB2C8\uB2E4(email\uBCC0\uACBD\uBD88\uAC00)")), react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.emailContainer
  }, react_1["default"].createElement(react_native_1.Text, {
    style: new_profile_style_1.styles.inputLabel
  }, "\uC774\uBA54\uC77C"), react_1["default"].createElement(react_native_1.TextInput, {
    style: new_profile_style_1.styles.input,
    value: authState.email,
    editable: false
  })), react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.inputContainer
  }, react_1["default"].createElement(NewProfileInput_1["default"], {
    label: "\uD604\uC7AC\uBE44\uBC00\uBC88\uD638",
    inputValue: currentPassword,
    onChange: handleCurrentPassWord,
    onChangeText: setCurrentPassword
  }), react_1["default"].createElement(InputError_1["default"], {
    errorMessage: errorMessage.currentPasswordErrorMSG
  })), react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.inputContainer
  }, react_1["default"].createElement(NewProfileInput_1["default"], {
    label: "\uC0C8 \uBE44\uBC00\uBC88\uD638",
    inputValue: newPassword,
    onChange: handleNewPassWord,
    onChangeText: setNewPassword
  }), react_1["default"].createElement(InputError_1["default"], {
    type: "multi",
    errorMessage: errorMessage.currentPasswordErrorMSG
  })), react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.inputContainer
  }, react_1["default"].createElement(NewProfileInput_1["default"], {
    label: "\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778",
    inputValue: newPassWorDoubleCheck,
    onChange: handleNewPassWordReCheck,
    onChangeText: setNewPassWordDoubleCheck
  }), react_1["default"].createElement(InputError_1["default"], {
    errorMessage: errorMessage.reNewPasswordErrorMSG
  })), react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.inputContainer
  }, react_1["default"].createElement(react_native_1.Text, {
    style: new_profile_style_1.styles.inputLabel
  }, "\uB2C9\uB124\uC784"), react_1["default"].createElement(react_native_1.View, {
    style: new_profile_style_1.styles.duplicatedButtonContainer
  }, react_1["default"].createElement(react_native_1.TextInput, {
    style: new_profile_style_1.styles.usernameInput,
    value: newUserName,
    onChange: handleUserName,
    onChangeText: setNewUserName
  }), react_1["default"].createElement(DuplicatedButton_1["default"], {
    title: "\uC911\uBCF5\uD655\uC778",
    onPress: handleDuplicated,
    disabled: userName.trim() === newUserName.trim() ? true : false
  }))), react_1["default"].createElement(Seperator_1.Separator, null), react_1["default"].createElement(react_native_1.Button, {
    title: "\uC218\uC815\uD558\uAE30",
    onPress: handleEditButton
  }));
}

exports["default"] = NewProfile;