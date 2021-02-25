import axios from "axios";

const setLesson = (context) => {
	axios
	.get(`http://127.0.0.1:3000/lessons/${context.state.lessonId}`)
	.then((res) => {
		context.commit("PRICE_UPDATED", res.data.price);
		context.commit("NAME_UPDATED", res.data.name);
		context.commit("THUMBNAIL_UPDATED", res.data.thumbnail);
		context.commit("CATEGORY_ID_UPDATED", res.data.categoryId);
	})
	.catch((error) => {
		console.error(error);
	});
};

export default {
	setLesson,
};
