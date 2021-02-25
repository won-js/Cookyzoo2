import express from "express";
import lessons from "./lesson.router";
import category from "./category.router";
import lessonContent from "./lesson_content.router";
import lessonDetail from "./lesson_detail.router";
import lessonMaterial from "./lesson_material.router";
import lessonOption from "./lesson_option.router";

const router = express.Router();

router.use("/category", category);
router.use("/lessons", lessons);
router.use("/lesson-content", lessonContent);
router.use("/lesson-detail", lessonDetail);
router.use("/lesson-material", lessonMaterial);
router.use("/lesson-option", lessonOption);

// // category 데이터 출력
// router.get("/category/:id", (req, res, next) => {
// 	const category_id = req.params.id;

// 	models.category.findAll(
// 		{
// 			where: {id: category_id},
// 		},
// 	).then(result => {
// 		res.render("category_show", {
// 			categories: result,
// 		});
// 	});
// });

export default router;
