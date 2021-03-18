import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// lesson_content에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.lesson_content.findAll()
		.then(result => {
			res.render("lesson_content_input", {
				lessonContents: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// 프론트에 전체 lesson 데이터 뿌리기
router.get("/lesson/:id", (req, res, next) => {
	models.lesson_content.findAll({
		where: {
			lesson_id: req.params.id,
		},
		order: [["step", "ASC"]],
	})
		.then(result => {
			res.status(httpStatus.OK).send(result);
			console.log(result.data);
		})
		.catch(err => {
			logger.error("lesson_content find by lesson_id failed: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});


// lesson_content에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.lesson_content.create({
		step: body.step,
		name: body.name,
		subtitle: body.subtitle,
		video: body.video,
		lesson_id: body.lesson_id,
	})
		.then(result => {
			logger.info("lesson_content created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_content created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_content 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.lesson_content.update({
		step: body.step,
		name: body.name,
		subtitle: body.subtitle,
		video: body.video,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("lesson_content updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_content updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_content 데이터 삭제
router.delete("/:id", (req, res) => {
	models.lesson_content.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("lesson_content deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_content deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
