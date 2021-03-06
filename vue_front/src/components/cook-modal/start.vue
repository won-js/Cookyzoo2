<template>
  <section>
    <article>
      <img src="@/assets/images/cookie.jpg" alt="" />
      <!-- :src=images" -->
    </article>
    <aside>
      <h1>초코쿠키 제작 클래스
				<font-awesome-icon :icon="['fas', 'cookie-bite']" size="lg" :style="{color:'brown'}"/>
				</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
        velit!!
      </p>
      <button @click="nextPage">바로 시작하기!</button>
    </aside>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

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
	height: 700px;
}
article {
  flex: 6;
}
article img {
  width: 100%;
	height: 100%;
}
aside {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;

  flex: 4;
	margin: 50px 20px;
	justify-content: center;
}
aside h1 {
	font-size: 40px;
	color: brown;
}
aside p {
}
aside button {
}

button {
  font-family: "SpoMedium";
  font-size: 40px;
}

button {
  background: #0f2232;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 400ms ease all;
  outline: none;
}
button:hover {
  background: #fff;
  color: #0f2232;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #0f2232;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

@media (max-width: 768px) {
  section {
    width: 100%;
  }
}
</style>
