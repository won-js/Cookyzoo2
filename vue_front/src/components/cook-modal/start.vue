<template>
	<section>
		<article>
			<img src="@/assets/images/cookie.jpg" alt="" />
			<!-- :src=images" -->
		</article>
		<aside>
			<h1>
				초코쿠키 제작 클래스
				<font-awesome-icon
					:icon="['fas', 'cookie-bite']"
					size="lg"
					:style="{color: 'brown'}"
				/>
			</h1>
			<p>
				초코 쿠키를 만들어보자!! 초코 쿠키를 만들어보자!! 초코 쿠키를
				만들어보자!!
			</p>
			<!-- <button @click="nextPage">바로 시작하기!</button> -->
			<ul>
				<li @click="nextPage">
					시작하기!
					<span></span><span></span><span></span><span></span>
				</li>
			</ul>
		</aside>
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
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;

	margin: auto;
	height: 100%;
}
article {
	flex: 6;
	display: flex;
	justify-content: center;
	align-items: center;
}
article img {
	width: 85%;
	height: 85%;
	box-shadow: 0px 0px 10px 2px grey;
}
aside {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-direction: column;

	flex: 4;
	margin: 2vw 1vw;
	justify-content: center;
	align-items: center;
}
aside h1 {
	font-size: 2.6vw;
	color: brown;
}
aside p {
	margin-bottom: 6vh;
	font-size: 1.4vw;
	font-family: "TmoneyRoundWindExtraBold";
}
aside button {
	margin-top: 2vh;
}

button {
	font-family: "SpoMedium";
	font-size: 2vh;
}

button {
	background: #0f2232;
	color: #fff;
	border: none;
	position: relative;
	height: 3vh;
	font-size: 2vh;
	padding: 0.5vh;
	cursor: pointer;
	transition: 400ms ease all;
	outline: none;
}

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	align-self: center;
}

ul li {
	--c: goldenrod;
	color: var(--c);
	font-size: 2vh;
	border: 0.5vh solid var(--c);
	border-radius: 0.5vh;
	width: 20vh;
	height: 5.5vh;
	text-transform: uppercase;
	font-weight: bold;
	font-family: sans-serif;
	letter-spacing: 0.5vh;
	text-align: center;
	line-height: 5.5vh;
	position: relative;
	overflow: hidden;
	z-index: 1;
	transition: 0.5s;
	margin: 1.5vh;
	background-color: white;
}

ul li span {
	position: absolute;
	width: 25%;
	height: 100%;
	background-color: var(--c);
	transform: translateY(150%);
	border-radius: 50%;
	left: calc((var(--n) - 1) * 25%);
	transition: 0.5s;
	transition-delay: calc((var(--n) - 1) * 0.1s);
	z-index: -1;
}

ul li:hover {
	color: white;
}

ul li:hover span {
	transform: translateY(0) scale(2);
}

ul li span:nth-child(1) {
	--n: 1;
}

ul li span:nth-child(2) {
	--n: 2;
}

ul li span:nth-child(3) {
	--n: 3;
}

ul li span:nth-child(4) {
	--n: 4;
}

@media (max-width: 768px) {
	section {
		width: 100%;
	}
}
</style>
