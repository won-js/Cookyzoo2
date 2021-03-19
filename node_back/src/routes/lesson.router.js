import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// lesson에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.lesson.findAll()
		.then(result => {
			res.render("lesson_input", {
				lessons: result,
			});
		})
		.catch(err => {
			res.send(httpStatus.INTERNAL_SERVER_ERROR, err);
		});
});

// 프론트에 lesson id의 lesson 뿌리기
router.get("/:id", (req, res, next) => {
	models.lesson.findByPk(req.params.id)
		.then(result => {
			res.status(httpStatus.OK).send({
				name: result.name,
				price: result.price,
				thumbnail: result.thumbnail,
				information: result.information,
				category_id: result.category_id,
			});
		})
		.catch(err => {
			logger.error("lesson find by id fail", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// 프론트에 전체 lesson 데이터 뿌리기
router.get("/", (req, res, next) => {
	models.lesson.findAll()
		.then(result => {
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson findAll fail", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});


// lesson에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.lesson.create({
		name: body.name,
		price: body.price,
		thumbnail: body.thumbnail,
		information: body.information,
		category_id: body.category_id,
	})
		.then(result => {
			logger.info("lesson created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.lesson.update({
		name: body.name,
		price: body.price,
		thumbnail: body.thumbnail,
		information: body.information,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("lesson updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson 데이터 삭제
router.delete("/:id", (req, res) => {
	models.lesson.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("lesson deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
