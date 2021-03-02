import express from "express";
import httpStatus from "http-status";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// lesson에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.lesson.findAll()
		.then(result => {
			res.render("lesson_input", {
				lessons: result,
			});
		});
});

// 프론트에 lesson id의 lesson 뿌리기
router.get("/:id", (req, res, next) => {
	models.lesson.findByPk(req.params.id)
		.then(result => {
			if (result) {
				res.json({
					name: result.name,
					price: result.price,
					thumbnail: result.thumbnail,
					category_id: result.category_id,
				});
			} else {
				res.send(httpStatus.NOT_FOUND);
			}
		});
});

// 프론트에 전체 lesson 데이터 뿌리기
router.get("/", (req, res, next) => {
	models.lesson.findAll()
		.then(result => {
			if (result) {
				res.json({
					result,
				});
			} else {
				res.send("error");
			}
		});
});


// lesson에 데이터 추가
router.post("/", (req, res, next) => {
	const body = req.body;


	logger.info(body.name);
	models.lesson.create({
		name: body.name,
		price: body.price,
		thumbnail: body.thumbnail,
		category_id: body.category_id,
	})
		.then(result => {
			logger.info("데이터 추가 완료");
			res.redirect("/lesson/show");
		})
		.catch(err => {
			logger.error("데이터 추가 실패");
		});
});

export default router;
