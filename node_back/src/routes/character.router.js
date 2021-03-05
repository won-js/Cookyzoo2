import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// character 확인
router.get("/show", (req, res, next) => {
	models.character.findAll()
		.then(result => {
			res.render("character_input", {
				characters: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// character 모두 찾기
router.get("/", (req, res, next) => {
	models.character.findAll()
		.then(result => res.send(result))
		.catch(err => {
			logger.error("character findAll fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// character에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.character.create({
		name: body.name,
		information: body.information,
		image: body.image,
		animation: body.animation,
		unlock: body.unlock,
	})
		.then(result => {
			logger.info("character created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("character created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// character 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.character.update({
		name: body.name,
		information: body.information,
		image: body.image,
		animation: body.animation,
		unlock: body.unlock,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("character updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("character updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// character 데이터 삭제
router.delete("/:id", (req, res) => {
	models.character.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("character deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("character deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
