import { NextFunction, Request, Response } from "express";
import { saveToken } from "../db/token";
import { createJWT } from "../utils/token";

export const makeAccessAndRefreshTokenMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    next();
  }
};
