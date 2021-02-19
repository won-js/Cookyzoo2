import express from "express";
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
		});
});

// lesson_content에 데이터 추가
router.post("/input", (req, res, next) => {
	const body = req.body;

	models.lesson_content.create({
		step: body.step,
		name: body.name,
		subtitle: body.subtitle,
		lesson_id: body.lesson_id,
	})
		.then(result => {
			logger.info("데이터 추가 완료");
			res.redirect("/lesson-content/show");
		})
		.catch(err => {
			logger.error("데이터 추가 실패");
		});
});

export default router;
