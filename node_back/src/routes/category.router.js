import express from "express";
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
		});
});


router.get("/all", (req, res, next) => {
	models.category.findAll()
		.then(result => res.send(result));
});

// category에 데이터 추가
router.post("/input", (req, res, next) => {
	const body = req.body;

	models.category.create({
		name: body.name,
	})
		.then(result => {
			logger.info("데이터 추가 완료");
			res.redirect("/category/show");
		})
		.catch(err => {
			logger.error("데이터 추가 실패");
		});
});

export default router;
