import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// lesson_material에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.lesson_material.findAll()
		.then(result => {
			res.render("lesson_material_input", {
				lessonMaterials: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_material를 lesson id로 가져오기
router.get("/lesson/:id", (req, res, next) => {
	models.lesson_material.findAll({
		include: [
			{
				model: models.lesson,
				where: {id: req.params.id},
			},
		],
	})
		.then(result => {
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_material find by lesson_id fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_material에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.lesson_material.create({
		name: body.name,
		quantity: body.quantity,
		lesson_id: body.lesson_id,
	})
		.then(result => {
			logger.info("lesson_material created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_material created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_material 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.lesson_material.update({
		name: body.name,
		quantity: body.quantity,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("lesson_material updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_material updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// lesson_material 데이터 삭제
router.delete("/:id", (req, res) => {
	models.lesson_material.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("lesson_material deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("lesson_material deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
