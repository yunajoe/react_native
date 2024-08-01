import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import {
  checkUserByEmail,
  checkUserByEmailAndPassword,
  checkUserByUserName,
} from "../db/user";

dotenv.config();

const homeRouter = Router();

homeRouter.post(
  "/check/DuplicatedUsername",
  async (req: Request, res: Response) => {
    const { username } = req.body;
    try {
      const result = await checkUserByUserName(username);
      if (!result) {
        return res
          .status(200)
          .json({ status: 200, message: "사용할수있는 username입니다" });
      }
      return res
        .status(400)
        .json({ status: 400, message: "이미 사용중인 username입니다" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// email으로 중복확인하기
homeRouter.post(
  "/check/DuplicatedEmail",
  async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
      const result = await checkUserByEmail(email);
      if (!result) {
        return res
          .status(200)
          .json({ status: 200, message: "사용할수있는 email입니다" });
      }
      return res
        .status(400)
        .json({ status: 400, message: "이미 사용중인 email입니다" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

homeRouter.post("/check/user", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await checkUserByEmailAndPassword({ email, password });
    if (!result) {
      return res.status(400).send({
        status: 400,
        message: "password가 틀렸습니다",
      });
    }
    return res.status(200).send({
      status: 200,
      message: "해당 user를 찾았습니다",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = homeRouter;
