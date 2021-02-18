process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

if (process.env.NODE_ENV == 'production') {
  console.log("Production Mode");
} else if (process.env.NODE_ENV == 'development') {
  console.log("Development Mode");
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var models = require('./models');

var app = express();
var dotenv = require('dotenv');

dotenv.config();

// view engine setup, app.set()으로 익스프레스 앱 설정 가능.
app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//미들웨어 연결하는 부분
app.use(logger('dev')); //보통 개발시에는 short나 dev를 쓰고, 배포 시에는 common이나 combined를 사용.

//요청의 본문을 해석(보통 폼 데이터나 Ajax 요청의 데이터 처리)해주는 미들웨어 body-parser가 express 내부로 내장됨.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//요청에 동봉된 쿠키 해석
app.use(cookieParser());

// 정적인 파일 제공, 실행해보고 이상 없으면 morgan 바로 아래인 20번 라인으로 위치 이동시킬 것. p.279
app.use(express.static(path.join(__dirname, 'public')));

//라우터 부분, app.use를 사용하므로, 라우터도 일종의 미들웨어. /users는 routes/users.js를 호출하라는 의미.
app.use('/', indexRouter);
app.use('/users', usersRouter);

//sequelize 사용
models.sequelize.sync();
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = app;
