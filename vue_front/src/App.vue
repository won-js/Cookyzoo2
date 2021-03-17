<template>
	<div id="app">
		<div class="container">
			<div v-if="check" class="gnb">
				<Gnb />
			</div>
			<router-view />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Gnb from "@/components/Gnb.vue";

export default {
	components: {
		Gnb,
	},
	data() {
		return {
			check: false,
		};
	},
};
</script>

<style>
@import "./assets/styles/style.css";
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
#app {
	font-family: "Jua", sans-serif;
}
</style>
