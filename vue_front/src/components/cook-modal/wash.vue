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

<style scoped>
html,
body {
	margin: 0;
	padding: 0;
}

section {
	margin: auto;
	height: 700px;
	background-image: url("../../assets/images/back3.jpg");
	background-size: 100% 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

p {
	font-size: 50px;
	font-weight: lighter;
}

button {
	font-size: 40px;
}

body:before{
  content:'';
  height:100%;
  display:inline-block;
  vertical-align:middle;
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
</style>
