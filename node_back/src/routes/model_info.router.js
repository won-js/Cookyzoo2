import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// 들어 있는 데이터 전체 보기
router.get("/show", (req,res) => {
	models.model_info.findAll()
		.then(result => {
			logger.info("불러오기 성공");
			res.json(result);
		}).catch(err => {
			logger.error("불러오기 실패");
			res.send(err);
		});
})
            
// 행동으로 모델 정보 가져오기
router.get("/:action_name", (req, res) => {
    models.model_info.findOne({where : { action_name : req.params.action_name}})
		.then(result => {
			if (result) {
				res.json({
                    action_name : result.action_name,
					name: result.name,
					metadata: result.metadata,
					weight: result.weight,
				});
			} else {
				res.send(httpStatus.NOT_FOUND);
			}
		}).catch(err => {
            logger.error("로딩 실패");
            res.send(err);
        });
});

// model_info에 데이터 추가
router.post("/", (req, res) => {
	const body = req.body;

	models.model_info.create({
		action_name : body.action_name,
        name: body.name,
		metadata: body.metadata,
		weight: body.weight,
	})
		.then(result => {
			logger.info("데이터 추가 완료");
            res.send(result);
		})
		.catch(err => {
			logger.error("데이터 추가 실패");
            res.send(err);
		});
});

// model_info 데이터 삭제
router.delete("/:action_name",(req, res) => {
    logger.info(req.params.action_name);
    models.model_info.destroy({where: {action_name : req.params.action_name}})
        .then(result => {
            logger.info("삭제 완료");
            res.json(result);
        })
        .catch(err => {
            logger.error("삭제 실패");
            res.send(err);
        });
})

export default router;
