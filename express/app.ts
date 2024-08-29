import dotenv from "dotenv";
import express, { Express } from "express";
dotenv.config();

export const mealFinderDataBase = require("./db");
const homeRouter = require("./routers/homeRouter");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const emailRouter = require("./routers/emailRouter");

const cookieParser = require("cookie-parser");

// const jwt = require("jsonwebtoken");

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 클라이언트에서 application/x-www-form-urlencoded 데이터를 보냈을때 파싱해서 body 객체에 넣어줌
app.use(cookieParser());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8081");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,'text/plain', Access-Control-Allow-Headers"
  );
  next();
});

app.use(homeRouter);
app.use(authRouter);
app.use(userRouter);
app.use(emailRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
