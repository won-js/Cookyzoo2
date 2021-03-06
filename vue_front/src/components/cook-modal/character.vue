<template>
	<section>
		<div class="char-title">
			<p>요리를 같이 할 캐릭터를 선택해주세요!</p>
		</div>
		<div class="char-box">
			<div class="character">
				<img src="../../assets/images/back.jpg" alt="캐릭터 이미지" />
				<p>캐릭터 이름</p>
				<p>캐릭터 설명</p>
				<button @click="nextPage">선택하기</button>
			</div>
			<div class="character">
				<img src="../../assets/images/back.jpg" alt="" />
				<p>캐릭터 이름</p>
				<p>캐릭터 설명</p>
				<button @click="nextPage">선택하기</button>
			</div>
			<div class="character">
				<img src="../../assets/images/back.jpg" alt="" />
				<p>캐릭터 이름</p>
				<p>캐릭터 설명</p>
				<button @click="nextPage">선택하기</button>
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

section {
	margin: auto;

	height: 700px;
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
	font-size: 20px;
}

.char-box {
	/*        border: 1px solid red;*/

	flex: 0.95;
	display: flex;

	/* padding: 10px; */
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

button {
	font-family: "SpoMedium";
	font-size: 30px;
}

button{
  background:#1AAB8A;
  color:#fff;
  border:none;
  position:relative;
  height:60px;
  font-size:1.6em;
  padding:0 2em;
  cursor:pointer;
  transition:400ms ease all;
  outline:none;
}
button:hover{
  background:#fff;
  color:#1AAB8A;
}
button:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,button:hover:after{
  width:100%;
  transition:800ms ease all;
}

@media (max-width: 768px) {
	section {
		width: 100%;
	}
}
</style>
