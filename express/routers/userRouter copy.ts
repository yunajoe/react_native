import dotenv from "dotenv";
import { Router } from "express";
import { mealFinderDataBase } from "../app";
import { checkUserByEmailAndPassword } from "../db/user";
import { checkPassWordValidation, validUserName } from "../utils/user";

dotenv.config();

const userRouter = Router();

userRouter.post("/finduser", async (req, res) => {
  const { email, password } = req.body;
  await checkUserByEmailAndPassword({ email, password })
    .then((data: any) => {
      if (data) {
        return res.json(data);
      }
      return res.status(400).json({ error: "해당정보에 맞는 user가 없습니다" });
    })
    .catch((err: any) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

userRouter.put(
  "/updateProfile",
  (req, res, next) => {
    const { email, newPassword, newUsername } = req.body;
    mealFinderDataBase.checkUserByEmail(email).then((data: any) => {
      // 두개다 현재와 똑같을떄 (최소한 한개라두 변경해야한다)
      if (data.username === newUsername && data.password === newPassword) {
        return res.status(400).json({
          status: 400,
          message: "닉네임 또는 password를 변경해주세요",
        });
      }

      next();
    });
  },
  (req, res) => {
    // 위에서 에러 안나면은 업데이투하쟈
    // 위에서 에러 안 나면은 최소 한개는 변경이 되었다는 뜻
    const { email, newPassword, newUsername } = req.body;
    const usernameValid = validUserName(newUsername);
    const pwdValid = checkPassWordValidation(newPassword);
    if (!usernameValid) {
      return res.status(400).send({
        status: 400,
        message: "유효한 닉네임형식이 아닙니다",
      });
    }
    if (!pwdValid) {
      return res.status(400).send({
        status: 400,
        message: "유효한 비밀번호형식이 아닙니다",
      });
    }

    mealFinderDataBase
      .updateUserProfile({ email, newPassword, newUsername })
      .then((data: any) => {
        if (typeof data === "number" && data > 0) {
          return res
            .status(200)
            .send({ status: 200, message: "프로필이 수정되었습니다" });
        }
      })
      .catch((err: any) => {
        return res.status(500).send({ error: "Internal server error" });
      });
  }
);

userRouter.post(
  "/deleteUser",
  (req, res, next) => {
    const { email } = req.body;
    mealFinderDataBase.checkUserByEmail(email).then((data: any) => {
      console.log("data", data);
      if (!data) {
        return res
          .status(400)
          .json({ status: 400, message: "해당 회원이 존재하지 않습니다" });
      }
      // 존재하면은 delete하는 logic으로 고고씽!
      next();
    });
  },
  (req, res) => {
    const { email } = req.body;
    mealFinderDataBase.deleteUser(email).then((data: any) => {
      if (typeof data === "number" && data > 0) {
        return res
          .status(200)
          .json({ status: 200, message: "회원탈퇴가 성공적으로 되었습니다" });
      }
      return res.status(400).json({
        status: 400,
        message: "회원탈퇴가 정상적으로 처리되지 못했습니다",
      });
    });
  }
);

module.exports = userRouter;
