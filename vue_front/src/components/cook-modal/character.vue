<template>
  <section>
    <div class="char-title">
      <p>요리를 같이 할 캐릭터를 선택해주세요!</p>
    </div>
    <div class="char-box">
      <div
        class="character"
        v-for="animal in animals"
        v-bind:key="animal.animation"
      >
        <img :src="animal.image" />
        <p>{{ animal.name }}</p>
        <p>{{ animal.information }}</p>
        <button @click="selectAnimal(animal.animation)">선택하기</button>
      </div>
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
    this.$http
      .get(`http://127.0.0.1:3000/animal`)
      .then((res) => {
        const animals = res.data;

        if (animals) {
          this.animals = animals;
          for (let i = 0; i < animals.length; i++) {
            this.animals[i].image = `/images/${animals[i].image}`;
          }
          console.log(this.animals);
        }
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
        console.log("실패");
      });
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

button {
  background: #1aab8a;
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
  color: #1aab8a;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
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
