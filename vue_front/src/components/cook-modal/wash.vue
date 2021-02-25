<template>
	<section>
		<p>잠깐! 손은 씻었나요??</p>
		<button @click="nextPage">네!</button>
	</section>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "Wash",
	methods: {
		...mapMutations({
			nextPage: "modal/NEXT_PAGE",
		}),
	},
};
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
}

section {
	margin: auto;
	height: 100%;
	background-image: url("../../assets/images/back3.jpg");
	background-size: 100% 100%;

	display: flex;
	justify-content: center;
	align-items: center;
}

p {
	font-size: 50px;
}
</style>
