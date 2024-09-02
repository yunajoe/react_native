import dotenv from "dotenv";
import { Router } from "express";
import { checkSubEmailIsNull, updateSubEmail } from "../db/user";
import { generateRandomNumber } from "../utils/email";
const nodemailer = require("nodemailer");

dotenv.config();

const emailRouter = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

emailRouter.post("/email/send", async (req, res) => {
  const currentTime = Date.now();
  const expiredTime = currentTime + 60 * 1000 * 1;

  const userEmail = req.body.email;

  const authCode = generateRandomNumber();

  res.cookie(userEmail, {
    code: authCode,
    expiresAt: expiredTime,
  });

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: userEmail,
    subject: "MealFinder에서 Authorization Code를 발송하였습니다",
    text: `Your authorization code is ${authCode}. It will expire in 5 minutes.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.response) {
      return res.status(200).send({
        status: 200,
        message: "인증번호가 성공적으로 보내졌습니다",
        currentTime: currentTime,
        expiredTime: expiredTime,
      });
    }
    return res.status(400).send({
      status: 400,
      message: "인증번호를 보내는데 실패하였습니다",
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
});

emailRouter.post("/email/authrizationcode", async (req, res) => {
  const { authEmail, email, authcode } = req.body;

  try {
    const { code } = req.cookies[email];

    if (Number(authcode) !== code) {
      return res.status(400).send({
        status: 400,
        message: "인증번호가 올바르지 않습니다",
      });
    }
    const isCheckEmailNull = await checkSubEmailIsNull(authEmail);
    if (!isCheckEmailNull) {
      return res.status(400).send({
        status: 400,
        message: "email은 총 3개만 입력이 가능합니다",
      });
    }

    const isUpdated = await updateSubEmail(authEmail, email);
    if (isUpdated) {
      return res.status(200).send({
        status: 200,
        message: "email이 추가가 되었습니다",
      });
    }
    return res.status(400).send({
      status: 400,
      message: "email이 추가가 되지 않았습니다",
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
});
module.exports = emailRouter;
