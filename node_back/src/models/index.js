/* eslint-disable import/no-dynamic-require */
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import {logger} from "../config/winston";
import Config from "../config/db.config";

const basename = path.basename(__filename);
const config = Config[process.env.NODE_ENV];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: config.dialect,
	operatorsAliases: false,
	dialectOptions: {
		// useUTC: true, //for reading from database
		dateStrings: true, // ! 데이터 로드시 문자열로 가저옴
		typeCast: true, // ! 타임존을 역으로 계산하지 않음
	},
	timezone: "+09:00",
});

fs.readdirSync(__dirname)
	.filter(file => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);

		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

sequelize
	.sync()
	.then(() => {
		logger.info("Database synchronized");
	})
	.catch(error => {
		logger.info("An error occured: ", error);
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


export default db;
