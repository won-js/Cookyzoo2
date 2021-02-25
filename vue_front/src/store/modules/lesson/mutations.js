const LESSON_ID_UPDATED = (state, lessonId) => {
	state.lessonId = lessonId;
};

const NAME_UPDATED = (state, name) => {
	state.name = name;
};

const PRICE_UPDATED = (state, price) => {
	state.price = price;
};

const THUMBNAIL_UPDATED = (state, thumbnail) => {
	state.thumbnail = thumbnail;
};

const CATEGORY_ID_UPDATED = (state, categoryId) => {
	state.categoryId = categoryId;
};

export default {
	LESSON_ID_UPDATED,
	NAME_UPDATED,
	PRICE_UPDATED,
	THUMBNAIL_UPDATED,
	CATEGORY_ID_UPDATED,
};
