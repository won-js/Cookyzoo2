import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// animal 확인
router.get("/show", (req, res, next) => {
	models.animal.findAll()
		.then(result => {
			res.render("animal_input", {
				animals: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// animal 모두 찾기
router.get("/", (req, res, next) => {
	models.animal.findAll()
		.then(result => res.send(result))
		.catch(err => {
			logger.error("animal findAll fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// 특정 animal 찾기
router.get("/:id", (req, res, next) => {
	models.animal.findByPk(req.params.id)
		.then(result => res.send(result))
		.catch(err => {
			logger.error("animal findAll fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});


// animal에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.animal.create({
		name: body.name,
		information: body.information,
		image: body.image,
		animation: body.animation,
		unlock: body.unlock,
	})
		.then(result => {
			logger.info("animal created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("animal created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// animal 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.animal.update({
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
			logger.info("animal updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("animal updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// animal 데이터 삭제
router.delete("/:id", (req, res) => {
	models.animal.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("animal deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("animal deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
