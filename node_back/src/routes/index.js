import express from "express";
import lessons from "./lesson.router";
import category from "./category.router";
import lessonContent from "./lesson_content.router";
import lessonDetail from "./lesson_detail.router";
import lessonMaterial from "./lesson_material.router";
import lessonOption from "./lesson_option.router";
import modelInfo from "./model_info.router";
import animal from "./animal.router";

const router = express.Router();

router.use("/category", category);
router.use("/lesson", lessons);
router.use("/lesson-content", lessonContent);
router.use("/lesson-detail", lessonDetail);
router.use("/lesson-material", lessonMaterial);
router.use("/lesson-option", lessonOption);
router.use("/model-info", modelInfo);
router.use("/animal", animal);

export default router;
