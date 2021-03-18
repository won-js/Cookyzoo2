import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// lesson_detail에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.lesson_detail.findAll()
		.then(result => {
			res.render("lesson_detail_input", {
				lessonDetails: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_detail에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.lesson_detail.create({
		image: body.image,
		information: body.information,
		lesson_id: body.lesson_id,
	})
		.then(result => {
			logger.info("lesson_detail created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_detail created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_detail 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.lesson_detail.update({
		image: body.image,
		information: body.information,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("lesson_detail updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_detail updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_detail 데이터 삭제
router.delete("/:id", (req, res) => {
	models.lesson_detail.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("lesson_detail deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_detail deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
