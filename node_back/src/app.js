import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import xss from "xss-clean";
import cors from "cors";
import compression from "compression";
import httpStatus from "http-status";

import {logger} from "./config/winston";
import morgan from "./config/morgan";
import indexRouter from "./routes/index";
import ApiError from "./utils/ApiError";
import models from "./models";

const app = express();

// 환경변수(NODE_ENV)로 개발, 배포 구분함
process.env.NODE_ENV =
	process.env.NODE_ENV &&
	process.env.NODE_ENV.trim().toLowerCase() === "production" ?
		"production" :
		"development";

// 정호 테스트
const testRouter = require("./routes/test");

if (process.env.NODE_ENV === "production") {
	logger.info("Production Mode");
} else if (process.env.NODE_ENV === "development") {
	logger.info("Development Mode");
}

// .env 파일 사용
dotenv.config();

// view engine setup, app.set()으로 익스프레스 앱 설정 가능.
app.set("../views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// 미들웨어 연결하는 부분

// morgan -> http request 로그 찍어줌, 보통 개발시에는 short나 dev를 쓰고, 배포 시에는 common이나 combined를 사용.
if (process.env.NODE_ENV === "production") {
	app.use(morgan.successHandler);
	app.use(morgan.errorHandler);
} else if (process.env.NODE_ENV === "development") {
	app.use(morgan.morgan("dev"));
}

// set security HTTP headers
app.use(helmet());

// 요청의 본문을 해석(보통 폼 데이터나 Ajax 요청의 데이터 처리)해주는 미들웨어 body-parser가 express 내부로 내장됨.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// xss 보안
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// 요청에 동봉된 쿠키 해석
app.use(cookieParser());

// 정적인 파일 제공, 실행해보고 이상 없으면 morgan 바로 아래인 20번 라인으로 위치 이동시킬 것. p.279
app.use(express.static(path.join(__dirname, "public")));

// 라우터 부분, app.use를 사용하므로, 라우터도 일종의 미들웨어. /users는 routes/users.js를 호출하라는 의미.
app.use("/", indexRouter);

// 정호 테스트
app.use("/api/test", testRouter);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
	next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// sequelize 사용
models.sequelize.sync();
models.sequelize
	.authenticate()
	.then(() => {
		logger.info("Connection has been established successfully.");
	})
	.catch(err => {
		logger.error("Unable to connect to the database:", err);
	});


export default app;
