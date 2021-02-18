import winston from "winston";
import WinstonDaily from "winston-daily-rotate-file";

const {combine, timestamp, printf} = winston.format;

const customFormat = printf(
	info => `${info.timestamp} ${info.level}: ${info.message}`,
);

const logger = winston.createLogger({
	format: combine(
		timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		customFormat,
	),
	transports: [
		new winston.transports.Console(), new WinstonDaily({
			level: "info",
			datePattern: "YYYYMMDD",
			dirname: "./logs",
			filename: `appName_%DATE%.log`,
			maxSize: null,
			maxFiles: 14,
		}),
	],
});

const stream = {
	write: message => {
		logger.info(message);
	},
};

export {logger, stream};
