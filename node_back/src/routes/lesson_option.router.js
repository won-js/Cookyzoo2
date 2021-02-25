import express from "express";
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
		});
});

// lesson_detail에 데이터 추가
router.post("/input", (req, res, next) => {
	const body = req.body;

	models.lesson_option.create({
		name: body.name,
		price: body.price,
		description: body.description,
		thumbnail: body.thumbnail,
		lesson_id: body.lesson_id,
	})
		.then(result => {
			logger.info("데이터 추가 완료");
			res.redirect("/lesson-option/show");
		})
		.catch(err => {
			logger.error("데이터 추가 실패");
		});
});

export default router;
