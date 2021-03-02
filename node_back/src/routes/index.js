import express from "express";
import lessons from "./lesson.router";
import category from "./category.router";
import lessonContent from "./lesson_content.router";
import lessonDetail from "./lesson_detail.router";
import lessonMaterial from "./lesson_material.router";
import lessonOption from "./lesson_option.router";
import model_info from "./model_info.router";

const router = express.Router();

router.use("/category", category);
router.use("/lesson", lessons);
router.use("/lesson-content", lessonContent);
router.use("/lesson-detail", lessonDetail);
router.use("/lesson-material", lessonMaterial);
router.use("/lesson-option", lessonOption);
router.use("/model_info", model_info);

export default router;
