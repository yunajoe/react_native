import dotenv from "dotenv";
import { Router } from "express";
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
  console.log("authCode가 보내졌다앙아");
  const currentTime = Date.now();
  const expiredTime = currentTime + 60 * 1000 * 1;

  const userEmail = req.body.email;

  const authCodeMap = new Map(); // In-memory storage for demo purposes

  const authCode = generateRandomNumber();
  // 나중에 validation을 위해서 저장
  authCodeMap.set(userEmail, {
    code: authCode,
    expiresAt: expiredTime,
  });
  var mailOptions = {
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

module.exports = emailRouter;
