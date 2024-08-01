import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");
require("dotenv").config();

const MY_SECRET_KEY = process.env.SECRET_KEY as string;

// 토큰 만들기
type CREATEJWT = {
  payload: {
    id: number;
    email: string;
  };
  privateKey: string;
  options: {
    expiresIn: "string";
  };
};

export const createJWT = (payload: any, privateKey: any, options: any) => {
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

// 토큰 authenticate하기
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const AccessToken = req.cookies["accessToken"];
  const RefreshToken = req.cookies["refreshToken"]; // refresh토큰은 안 뽑아진댜 흠흠
  if (!AccessToken || !RefreshToken) {
    res.status(404).send({ message: "토큰이 없습니다" });
    return;
  }

  const payload = {
    email: "ddd",
  };

  const isAccessTokenValidated = verifyJWT(AccessToken, MY_SECRET_KEY);
  const isRefreshTokenValidated = verifyJWT(RefreshToken, MY_SECRET_KEY);

  if (!isAccessTokenValidated.expired) {
    // 새로운 accessToken을 발급
    if (isRefreshTokenValidated.expired) {
      const newAccessToken = createJWT(payload, process.env.SECRET_KEY, {
        expiresIn: "5m",
      });
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 300000,
      });
      res.status(200).send({ message: "새로운 accessToken이 발급되었습니다" });
    } else {
      res.status(404).send({ message: "다시 로그인해주세요" });
    }
  }
};
