import dotenv from "dotenv";

import { NextFunction, Request, Response, Router } from "express";
import { deleteToken, saveToken } from "../db/token";
import {
  checkUserByEmail,
  checkUserByEmailAndPassword,
  createUser,
} from "../db/user";
import { makeAccessAndRefreshTokenMiddleWare } from "../middleware/token";
import {
  signUPcheckUserEmailMiddleWare,
  signUPcheckUserNickNameMiddleWare,
} from "../middleware/user";
import { createJWT } from "../utils/token";

dotenv.config();

const authRouter = Router();

authRouter.post(
  "/signup",
  signUPcheckUserEmailMiddleWare,
  signUPcheckUserNickNameMiddleWare,
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, username, password } = req.body;
    const response = await createUser({ email, username, password });
    if (!response)
      return res.status(400).send({
        status: 400,
        message: "회원가입이 정상적으로 이루어지지 않았습니다",
      });
    // userData를 local에 저장할려고 다시 한번
    const userData = await checkUserByEmail(email);
    res.locals.result = userData;
    next();
  },
  makeAccessAndRefreshTokenMiddleWare,
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send({
      status: 200,
      message: "회원가입이 되었습니다!",
    });
  }
);

// 로그인
authRouter.post(
  "/signin",
  async (req, res, next) => {
    const { email } = req.body;
    const result = await checkUserByEmail(email);
    if (!result) {
      return res.status(400).send({
        status: 400,
        message: "해당 email로 가입된 적이 없습니다",
        accessToken: null,
        refreshToken: null,
        id: "",
      });
    }
    next();
  },
  async (req, res, next) => {
    const { email, password } = req.body;
    const result = await checkUserByEmailAndPassword({ email, password });
    if (!result) {
      return res.status(400).send({
        status: 400,
        message: "비밀번호가 틀렸습니다",
        accessToken: null,
        refreshToken: null,
        id: "",
      });
    }
    res.locals.result = result;
    next();
  },
  async (req, res, next) => {
    const userData = res.locals.result;
    const users_id = userData.id;
    const { email, password } = req.body;
    const payload = {
      id: users_id,
      email: email,
    };
    const accessToken = createJWT(payload, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });
    const refreshToken = createJWT(payload, process.env.SECRET_KEY, {
      expiresIn: "15m",
    });

    const result = await saveToken({
      users_id,
      email,
      accessToken,
      refreshToken,
    });

    if (result) {
      // res.cookie("accessToken", accessToken, {
      //   httpOnly: true,
      //   maxAge: 300000,
      // });
      // res.cookie("refreshToken", refreshToken, {
      //   httpOnly: true,
      //   secure: false,
      //   sameSite: "strict",
      // });
      return res.status(200).send({
        status: 200,
        message: "로그인에 성공하였습니다",
        id: userData.id,
        email: userData.email,
        username: userData.username,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
    return res.status(400).send({
      status: 400,
      message: "로그인에 실패하였습니다",
    });
  }
);

// 로그아웃

authRouter.post("/signout", async (req, res) => {
  const { email } = req.body;
  try {
    const result = await deleteToken(email);
    if (result) {
      return res.status(200).send({
        status: 200,
        message: "정상적으로 로그아웃이되었습니다",
      });
    }
    return res.status(400).send({
      status: 400,
      message: "이미 로그아웃 되었습니다",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = authRouter;
