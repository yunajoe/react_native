// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// // 토큰 만들기
// function createJWT(payload, privateKey, options) {
//   return jwt.sign(payload, privateKey, options);
// }

// // 토큰 verify하기
// function verifyJWT(token, publickey) {
//   try {
//     const decoded = jwt.verify(token, publickey);
//     return { payload: decoded, expired: false };
//   } catch (err) {
//     return { payload: null, expired: true };
//   }
// }

// // 토큰 authenticate하기
// const authenticate = (req, res, next) => {
//   const AccessToken = req.cookies["accessToken"];
//   const RefreshToken = req.cookies["refreshToken"]; // refresh토큰은 안 뽑아진댜 흠흠

//   const isAccessTokenValidated = verifyJWT(AccessToken, process.env.SECRET_KEY);
//   const isRefreshTokenValidated = verifyJWT(
//     RefreshToken,
//     process.env.SECRET_KEY
//   );

//   if (!isAccessTokenValidated.expired) {
//     // 새로운 accessToken을 발급
//     if (isRefreshTokenValidated.expired) {
//       const newAccessToken = createJWT(payload, process.env.SECRET_KEY, {
//         expiresIn: "5m",
//       });
//       res.cookie("accessToken", newAccessToken, {
//         httpOnly: true,
//         maxAge: 300000,
//       });
//       res.status(200).send({ message: "새로운 accessToken이 발급되었습니다" });
//     } else {
//       res.status(404).send({ message: "다시 로그인해주세요" });
//     }
//   }
// };
// // pwd검증하기
// const checkPassWordValidation = (password) => {
//   const engRegex = new RegExp("[a-zA-Z]");
//   const numRegex = new RegExp("\\d");
//   const specialCharRegex = new RegExp("[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣s\\s]"); // 영어, 한글, 공백을 제외한 나머지문자 = 즉 , 특수문자
//   const result1 = engRegex.test(password); // 영어가 있으면 true
//   const result2 = numRegex.test(password); // 숫자가 있는지확인
//   const result3 = specialCharRegex.test(password); // 특수문자가 있는지 확인(여)
//   if (result1 && result2) {
//     return true;
//   }
//   if (result2 && result3) {
//     return true;
//   }
//   if (result1 && result3) {
//     return true;
//   }
//   return false;
// };

// // username검증하기 (최소 2글자이상)
// const validUserName = (username) => {
//   if (username.trim().length >= 2) {
//     return true;
//   }
//   return false;
// };

// module.exports = {
//   createJWT,
//   verifyJWT,
//   authenticate,
//   checkPassWordValidation,
//   validUserName,
// };
