const jwt = require("jsonwebtoken");

require("dotenv").config();

export const createJWT = (payload: any, privateKey: string, options?: any) => {
  return jwt.sign(payload, privateKey, options);
};

// 토큰 verify하기
export const verifyJWT = (token: string, publickey: string) => {
  try {
    const decoded = jwt.verify(token, publickey);
    return { payload: decoded, expired: false };
  } catch (err) {
    return { payload: null, expired: true };
  }
};
