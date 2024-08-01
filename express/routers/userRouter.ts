import dotenv from "dotenv";
import { Router } from "express";
import { mealFinderDataBase } from "../app";
import { deleteUser } from "../db/user";
import { checkPassWordValidation, validUserName } from "../utils/user";

dotenv.config();

const userRouter = Router();

// userRouter.post("/finduser", async (req, res) => {
//   const { email, password } = req.body;
//   await checkUserByEmailAndPassword({ email, password })
//     .then((data: any) => {
//       if (data) {
//         return res.json(data);
//       }
//       return res.status(400).json({ error: "해당정보에 맞는 user가 없습니다" });
//     })
//     .catch((err: any) => {
//       res.status(500).json({ error: "Internal server error" });
//     });
// });

userRouter.put(
  "/updateProfile",
  (req, res, next) => {
    const { email, newPassword, newUsername } = req.body;
    mealFinderDataBase.checkUserByEmail(email).then((data: any) => {
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

userRouter.post("/user/delete", async (req, res) => {
  const { email } = req.body;
  try {
    const result = await deleteUser(email);
    if (result) {
      return res.status(200).send({
        status: 200,
        message: "회원탈퇴가 성공적으로 되었습니다",
      });
    }
    return res.status(400).send({
      status: 400,
      message: "회원탈퇴가 정상적으로 처리되지 못했습니다",
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = userRouter;
