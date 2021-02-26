<template>
	<section>
		<p>수업 소개</p>
		<img :src="images" />
		<p class="title">{{ name }}</p>
		<!--요리 제목 -->
		<p class="describe">{{ price }}</p>
		<!-- 요리설명 -->
		<button @click="nextPage">바로 시작하기!</button>
	</section>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	name: "Start",
	data() {
		return {
			images: null,
			name: 0,
			price: 0,
			timer: null,
			currentIndex: 0,
		};
	},
	computed: {
		// currentImg() {
		//   return this.image[Math.abs(this.currentIndex) % this.images.length];
		// },
		...mapGetters({
			getName: "lesson/name",
			getPrice: "lesson/price",
			getThumbnail: "lesson/thumbnail",
		}),
	},
	methods: {
		...mapMutations({
			nextPage: "modal/NEXT_PAGE",
		}),
		startSlide() {
			console.log("startslide");
			this.timer = setInterval(this.next, 4000);
		},
	},
	mounted() {
		console.log("-----------------------------");
		this.images = `images/lesson/${this.getThumbnail}`;
		this.name = this.getName;
		this.price = this.getPrice;
		console.log(this.name);
		console.log(this.images);
	},
};
</script>

<style scoped>
html,
body {
	margin: 0;
	padding: 0;
}

section {
	margin: auto;

	height: 100%;
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
	background-image: url("../../assets/images/back3.jpg");
	background-size: 100% 100%;
}

img {
	width: 40%;
	height: 40%;
}

p {
	color: black;
}

.title {
	font-size: 20px;
}

@media (max-width: 768px) {
	section {
		width: 100%;
	}
}
</style>
