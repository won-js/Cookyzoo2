<template>
  <section>
    <div class="char-title">
      <p>같이 요리할 캐릭터를 선택해볼까요?</p>
    </div>
    <div class="character-box">
      <carousel-3d
        :height="carouselHeight"
        :width="carouselWidth"
        :on-slide-change="onSlideChanged"
      >
        <slide
          class="character"
          v-for="(animal, i) in getAnimals"
          :index="i"
          :key="animal.id"
        >
          <div class="wrap">
            <img class="rabbit" :src="animal.image" alt="" />
            <div class="arrow_box">
              <p class="speech-text">
                ㅎㅇ 나는 {{ animal.name }}야, 나는 {{ animal.information }}
              </p>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
    <ul>
      <li @click="selectAnimal()">
        선택하기
        <span></span><span></span><span></span><span></span>
      </li>
    </ul>
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
      carouselHeight: 0,
      carouselWidth: 0,
      index: 0,
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
    selectAnimal() {
      this.setAnimalAnimation(this.getAnimals[this.index].animation);
      this.setStart(true);
      this.nextPage();
    },
    handleResize(event) {
      this.carouselHeight = window.innerHeight * 0.4;
      this.carouselWidth = window.innerWidth * 0.3;
    },
    onSlideChanged(index) {
      this.index = index;
    },
  },
  created() {
    // this.setAnimalAnimation(1);
  },
  mounted() {
    console.log("두번째");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    // console.log("beforeDestroy...");
    window.removeEventListener("resize", this.handleResize);
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
  flex: 1 1 0;
}

.char-title p {
  font-size: 4vh;
  font-family: "Katuri";
  margin: 0;
  padding: 3vh;
}

.character-box {
  flex: 5 5 0;
  margin: 0;
  padding: 0;
  display: flex;
}

.character {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 31%;
  padding: 1vh;
}

.carousel-3d-container {
  margin: 0;
  padding: 0;
  overflow: visible;
}

.carousel-3d-slider {
  margin: 0;
  padding: 0;
}

.carousel-3d-container .carousel-3d-slider .carousel-3d-slide {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  visibility: visible !important;
  /* border: 1px solid red; */
  margin: 0;
  padding: 0;
  overflow: visible;
}

.carousel-3d-slide ul li {
  display: none;
}

.current ul li {
  margin: 0;
  padding: 0;
  display: block;
}

.wrap {
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
  width: 10vh;
  height: 30vh;
  /* border: 1px solid blue; */
}

.rabbit {
  position: absolute;
  width: auto;
  height: 40vh;
  left: 50%;
  top: 30%;
  margin: 0;
  padding: 0;
  transform: translateX(-50%);
}
.arrow_box {
  visibility: hidden;
  /* visibility: visible; */
  position: absolute;
  left: -120%;
  bottom: 76%;
  width: 40vh;
  height: 15vh;
  background: white;
  border: 0.5vh solid #bbbbbb;
  border-radius: 2.5vh;
  margin: 0;
  padding: 0;
}
.speech-text {
  font-size: 3vh;
  font-family: "Bazzi";
  margin: 3vh;
  text-align: center;
}

.arrow_box:after,
.arrow_box:before {
  top: 100%;
  left: 30%;
  border: solid transparent;
  content: ""; /* after, before사용 시 필요, */
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #bbbbbb;
  border-width: 3vh;
  margin: 0;
  padding: 0;
}

.arrow_box:after {
  border-color: rgba(136, 183, 213, 0);
  margin: 0;
  padding: 0;
  border-top-color: #ffffff;
  border-width: 3vh;
  margin-left: -3vh;
}

.arrow_box:before {
  border-color: rgba(194, 225, 245, 0);
  border-top-color: #bbbbbb;
  border-width: 3vh;
  margin-left: -3vh;
}
.current .rabbit:hover + div.arrow_box {
  visibility: visible;
}

p {
  padding: 1vh;
}

ul {
  flex: 1 1 0;
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
