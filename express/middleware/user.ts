import { NextFunction, Request, Response } from "express";
import { checkUserByEmail, checkUserByUserName } from "../db/user";

export const signUPcheckUserEmailMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  const result = await checkUserByUserName(username);
  if (result) {
    res.status(400).send({ error: "사용중인 닉네임이 있습니다" });
    return;
  }
  next();
};

export const signUPcheckUserNickNameMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const result = await checkUserByEmail(email);
  if (result) {
    return res
      .status(400)
      .send({ status: 400, error: "사용중인 이메일이 있습니다" });
  }
  next();
};
