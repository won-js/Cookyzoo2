import express from "express";
import classes from "./class.router";
import category from "./category.router";
import classContent from "./class_content.router";
import classDetail from "./class_detail.router";
import classMaterial from "./class_material.router";
import classOption from "./class_option.router";

const router = express.Router();

router.use("/category", category);
router.use("/classes", classes);
router.use("/class-content", classContent);
router.use("/class-detail", classDetail);
router.use("/class-material", classMaterial);
router.use("/class-option", classOption);

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
