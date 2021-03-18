import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// lesson_option에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.lesson_option.findAll()
		.then(result => {
			res.render("lesson_option_input", {
				lessonOptions: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_option에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.lesson_option.create({
		name: body.name,
		price: body.price,
		description: body.description,
		thumbnail: body.thumbnail,
		lesson_id: body.lesson_id,
	})
		.then(result => {
			logger.info("lesson_option created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_option created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_option 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.lesson_option.update({
		name: body.name,
		price: body.price,
		description: body.description,
		thumbnail: body.thumbnail,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("lesson_option updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_option updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_option 데이터 삭제
router.delete("/:id", (req, res) => {
	models.lesson_option.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("lesson_option deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_option deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
