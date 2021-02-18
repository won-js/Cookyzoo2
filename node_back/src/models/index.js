/* eslint-disable import/no-dynamic-require */
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(__filename)
const config = require(`${__dirname}/../config/db.config`)[process.env.NODE_ENV]
const db = {}

let sequelize;
console.log(config);
sequelize = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect : config.dialect,
    operatorsAliases: false,
    dialectOptions: {
        // useUTC: true, //for reading from database
        dateStrings: true, // ! 데이터 로드시 문자열로 가저옴
        typeCast: true, // ! 타임존을 역으로 계산하지 않음
      },
    timezone: '+09:00'
    });

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    // eslint-disable-next-line global-require
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    console.log(model.name);
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

sequelize
    .sync()
    .then(() => {
      console.log('Database synchronized');
    })
    .catch((error) => {
      console.log('An error occured: ', error);
    });

db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db;