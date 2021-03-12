<template>
  <section>
    <div class="char-title">
      <p>같이 요리할 캐릭터를 선택해볼까요?</p>
    </div>
    <div class="character-box">
      <carousel-3d :width="300" :height="600">
        <slide
          class="character"
          v-for="(animal, i) in getAnimals"
          :index="i"
          :key="animal.id"
        >
          <div class="wrap">
            <img class="rabbit" :src="animal.image" alt="" />
            <div class="arrow_box">
              <p class="speech-text">ㅎㅇ 나는 {{ animal.name }}고, {{ animal.information }}이다 ㅇㅋ?</p>
            </div>
          </div>
          <ul>
            <li @click="selectAnimal(animal.animation)">
              선택하기
              <span></span><span></span><span></span><span></span>
            </li>
          </ul>
        </slide>
      </carousel-3d>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Character",
  data() {
    return {
      animals: [
        {
          id: null,
          name: null,
          information: null,
          image: null,
          animation: null,
          unlock: null,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getAnimalAnimation: "game/animalAnimation",
      getAnimals: "animal/animals",
    }),
  },
  methods: {
    ...mapMutations({
      nextPage: "modal/NEXT_PAGE",
      setAnimalAnimation: "game/ANIMAL_ANIMATION_UPDATED",
      setStart: "game/START_UPDATED",
    }),
    selectAnimal(animalAnimation) {
      this.setAnimalAnimation(animalAnimation);
      this.setStart(true);
      this.nextPage();
    },
  },
  created() {
    this.setAnimalAnimation(1);
  },
  mounted() {
    console.log("두번째");
  },
};
</script>

<style scoped>
section {
  margin: auto;

  height: 100%;
  background-image: url("../../assets/images/bg3.jpg");
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* position: relative; */
}

.char-title {
  flex: 0.05;
}

.char-title p {
  font-size: 25px;
}

.char-box {
  flex: 0.95;
  display: flex;
}

.char-box p {
}

.char-box .box-name {
  /* 캐릭터 이름 */
  font-size: 25px;
}

.char-box .box-info {
  /* 캐릭터 설명 */
  font-size: 18px;
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

.carousel-3d-container {
	overflow: visible;
}

.carousel-3d-slider {
}

.carousel-3d-container .carousel-3d-slider .carousel-3d-slide {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  visibility: visible !important;
  /* border: 1px solid red; */
	padding: 0;
	overflow: visible;
}

.carousel-3d-slide ul li {
  display: none;
}

.current ul li {
  display: block;
}
.wrap {
  position: relative;
  margin: 0 auto;
	display: block;
  width: 300px;
  height: 300px;
  /* border: 1px solid blue; */
}

.rabbit {
  position: absolute;
	width: 70%;
	left: 50%;
	transform: translateX(-50%);
}
.arrow_box {
  visibility: hidden;
	/* visibility: visible; */
	position: absolute;
  left: 60%;
	bottom: 60%;
  width: 350px;
  height: 150px;
  background: white;
  border: 4px solid #bbbbbb;
  border-radius: 35px;
}
.speech-text {
  font-size: 25px;
  font-weight: 500;
  margin: 5 15px;
	text-align: center;
}

.arrow_box:after,
.arrow_box:before {
  top: 100%;
  left: 20%;
  border: solid transparent;
  content: ""; /* after, before사용 시 필요, */
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(136, 183, 213, 0);
  border-top-color: #ffffff;
  border-width: 30px;
  margin-left: -30px;
}

.arrow_box:before {
  border-color: rgba(194, 225, 245, 0);
  border-top-color: #bbbbbb;
  border-width: 36px;
  margin-left: -36px;
}
.current .rabbit:hover + div.arrow_box {
  visibility: visible;
}

p {
  padding: 10px;
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
  font-size: 16px;
  border: 0.3em solid var(--c);
  border-radius: 0.5em;
  width: 12em;
  height: 3em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 3em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  margin: 1em;
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
