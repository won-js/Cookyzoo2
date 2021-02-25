<template>
	<section>
		<div class="char-title">
			<p>캐릭터를 선택해주세요!</p>
		</div>
		<div class="char-box">
			<div class="character">
				<img src="../../assets/images/back.jpg" alt="" />
				<p>캐릭터 이름</p>
				<p>캐릭터 설명</p>
				<button @click="nextPage">선택하기버튼</button>
			</div>
			<div class="character">
				<img src="../../assets/images/back.jpg" alt="" />
				<p>캐릭터 이름</p>
				<p>캐릭터 설명</p>
				<button @click="nextPage">선택하기버튼</button>
			</div>
			<div class="character">
				<img src="../../assets/images/back.jpg" alt="" />
				<p>캐릭터 이름</p>
				<p>캐릭터 설명</p>
				<button @click="nextPage">선택하기버튼</button>
			</div>
		</div>
	</section>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "Character",
	methods: {
		...mapMutations({
			nextPage: "modal/NEXT_PAGE",
		}),
	},
	mounted() {
		console.log("두번째");
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
	/*        padding: 10px;*/
	background-image: url("../../assets/images/back3.jpg");
	background-size: 100% 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	/*        align-items: stretch; 디폴트 값 */
}

.char-title {
	/*        border: 1px solid blue;*/

	flex: 0.05;
}

.char-box {
	/*        border: 1px solid red;*/

	flex: 0.95;

	display: flex;

	flex-wrap: wrap;
	padding: 10px;
}

.character {
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	width: 31%;
	padding: 10px;
}

img {
	width: 100%;
}

p {
	padding: 10px;
}

@media (max-width: 768px) {
	section {
		width: 100%;
	}
}
</style>
