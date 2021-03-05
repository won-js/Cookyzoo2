import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// 들어 있는 데이터 전체 보기
router.get("/", (req, res) => {
	models.model_info.findAll()
		.then(result => {
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("model_info findAll fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// 행동으로 모델 정보 가져오기
router.get("/action-name/:action_name", (req, res) => {
	models.model_info.findOne({where: {action_name: req.params.action_name}})
		.then(result => {
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("model_info find by action_name fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// model_info에 데이터 추가
router.post("/", (req, res) => {
	const body = req.body;

	models.model_info.create({
		action_name: body.action_name,
		name: body.name,
		metadata: body.metadata,
		weight: body.weight,
	})
		.then(result => {
			logger.info("model_info created: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("model_info created fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// model_info 업데이트
router.put("/:id", (req, res) => {
	const body = req.body;

	models.model_info.update({
		action_name: body.action_name,
		name: body.name,
		metadata: body.metadata,
		weight: body.weight,
	}, {
		where: {
			id: req.params.id,
		},
	})
		.then(result => {
			logger.info("model_info updated: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("model_info updated fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

// model_info 데이터 삭제
router.delete("/:action_name", (req, res) => {
	models.model_info.destroy({where: {action_name: req.params.action_name}})
		.then(result => {
			logger.info("model_info delete: ", result);
			res.status(httpStatus.OK).send(result);
		})
		.catch(err => {
			logger.error("model_info delete fail: ", err);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
		});
});

export default router;
