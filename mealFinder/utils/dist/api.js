"use strict";
exports.__esModule = true;
exports.updateUserProfile = exports.checkDuplicated = exports.areaURL = exports.categoryURL = exports.baseURL = void 0;
exports.baseURL = 'https://www.themealdb.com';
exports.categoryURL = exports.baseURL + '/api/json/v1/1/filter.php?c=';
exports.areaURL = exports.baseURL + '/api/json/v1/1/filter.php?a=';
// backend로 만든 API
// export const findOutUser = 'http://10.0.2.2:3001/finduser';
exports.checkDuplicated = 'http://10.0.2.2:3001/checkDuplicated';
exports.updateUserProfile = 'http://10.0.2.2:3001/updateProfile';
