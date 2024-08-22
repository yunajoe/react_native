import dotenv from "dotenv";
import { Router } from "express";
import { checkUserByUserName, deleteUser, updateUserName } from "../db/user";

dotenv.config();

const userRouter = Router();

userRouter.put("/user/update/username", async (req, res, next) => {
  const { email, username } = req.body;
  const result = await checkUserByUserName(username);
  if (result) {
    res
      .status(400)
      .send({ status: 400, message: "사용중인 닉네임이 있습니다" });
    return;
  }

  const result2 = await updateUserName(email, username);
  if (result2) {
    return res.status(200).send({
      status: 200,
      message: "닉네임이 성공적으로 변경되었습니다",
    });
  }
  return res.status(400).send({
    status: 400,
    message: "닉네임 변경하는데 실패하였습니다",
  });
});

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
