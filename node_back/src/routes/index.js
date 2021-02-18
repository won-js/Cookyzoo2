var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// category에 데이터 추가하는 폼 보기
router.get('/categoryinput', function(req, res, next) {
  res.render('category_input');
});

// category에 데이터 추가
router.post('/categoryinput', function(req, res, next) {
  let body = req.body;
  models.category.create({
    name: body.name,
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/categoryinput");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});

// class에 데이터 추가하는 폼 보기
router.get('/classinput', function(req, res, next) {
  res.render('class_input');
});

// class에 데이터 추가
router.post('/classinput', function(req, res, next) {
  let body = req.body;
  models.class.create({
    name: body.name,
    price: body.price,
    thumbnail: body.thumbnail,
    category_id: body.category_id
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/classinput");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});

// class_content에 데이터 추가하는 폼 보기
router.get('/classcontentinput', function(req, res, next) {
  res.render('class_content_input');
});

// class_content에 데이터 추가
router.post('/classcontentinput', function(req, res, next) {
  let body = req.body;
  models.class_content.create({
    step: body.step,
    name: body.name,
    subtitle: body.subtitle,
    class_id: body.class_id
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/classcontentinput");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});

// class_detail에 데이터 추가하는 폼 보기
router.get('/classdetailinput', function(req, res, next) {
  res.render('class_detail_input');
});

// class_detail에 데이터 추가
router.post('/classdetailinput', function(req, res, next) {
  let body = req.body;
  models.class_detail.create({
    image: body.image,
    information: body.information,
    class_id: body.class_id
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/classdetailinput");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});

// class_detail에 데이터 추가하는 폼 보기
router.get('/classmaterialinput', function(req, res, next) {
  res.render('class_material_input');
});

// class_detail에 데이터 추가
router.post('/classmaterialinput', function(req, res, next) {
  let body = req.body;
  models.class_material.create({
    name: body.name,
    quantity: body.quantity,
    class_id: body.class_id
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/classmaterialinput");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});

// class_option에 데이터 추가하는 폼 보기
router.get('/classoptioninput', function(req, res, next) {
  res.render('class_option_input');
});

// class_detail에 데이터 추가
router.post('/classoptioninput', function(req, res, next) {
  let body = req.body;
  models.class_option.create({
    name: body.name,
    price: body.price,
    description: body.description,
    thumbnail: body.thumbnail,
    class_id: body.class_id
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/classoptioninput");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});



// category 데이터 출력
router.get('/category/:id', function(req, res, next) {
  let category_id = req.params.id;
  models.category.findAll(
    {
      where: {id: category_id},
    }
  ).then( result => {
    res.render("category_show", {
      categories: result
    });
  });
});

module.exports = router;
