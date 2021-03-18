import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// category 확인
router.get("/show", (req, res, next) => {
	models.category.findAll()
		.then(result => {
			res.render("category_input", {
				categories: result,
			});
		})
		.catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// category 모두 찾기
router.get("/", (req, res, next) => {
	models.category.findAll()
		.then(result => res.status(httpStatus.OK).send(result))
		.catch(err => {
			logger.error("category findAll fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// category에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;

	models.category.create({
		name: body.name,
	})
		.then(result => {
			logger.info("category created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("category created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// category 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.category.update({name: body.name}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("category updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("category updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// category 데이터 삭제
router.delete("/:id", (req, res) => {
	models.category.destroy({where: {id: req.params.id}})
		.then(result => {
			logger.info("category deleted: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("category deleted fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
