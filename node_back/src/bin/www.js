#!/usr/bin/env node

// bin/www파일은 http모듈에 express 모듈을 연결, port를 지정하는 부분.(260p)

/**
 * Module dependencies.
 */
// app, debug, http 모듈을 가져옴,
import http from "http";
import app from "../app.js"; // app.js 파일
import {logger} from "../config/winston";

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Get port from environment and store in Express.
 */

// app.set('port', port)로 서버가 실행될 포트 설정, process.env 객체에 PORT 속성이 있다면 그 값 사용, 없으면 기본값으로 3000포트 사용,
const port = normalizePort(process.env.PORT || "3000");

app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app); // http.createServer에 불러온 app 모듈을 넣어줌, app 모듈이 createServer 메소드의 콜백함수 역할을 함.

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); // 포트 연결하고 서버 실행.

server.on("error", error => {
	if (error.syscall !== "listen") {
		throw error;
	}

	const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			logger.error(`${bind} requires elevated privileges`);
			process.exit(1);
			break;
		case "EADDRINUSE":
			logger.error(`${bind} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
});

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;

	logger.debug(`Listening on ${bind}`);
});
