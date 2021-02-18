import express from "express";
import {logger} from "../config/winston";
import models from "../models";

const router = express.Router();

// class_option에 데이터 추가하는 폼 보기
router.get("/show", (req, res, next) => {
	models.class_detail.findAll()
		.then(result => {
			res.render("class_option_input", {
				classOptions: result,
			});
		});
});

// class_detail에 데이터 추가
router.post("/input", (req, res, next) => {
	const body = req.body;

	models.class_option.create({
		name: body.name,
		price: body.price,
		description: body.description,
		thumbnail: body.thumbnail,
		class_id: body.class_id,
	})
		.then(result => {
			logger.info("데이터 추가 완료");
			res.redirect("/classoptioninput");
		})
		.catch(err => {
			logger.error("데이터 추가 실패");
		});
});

export default router;
