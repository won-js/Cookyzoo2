<template>
  <div>
    <start v-if="getPage == 0" />
    <character v-else-if="getPage == 1" />
    <!-- <wash v-else-if="getPage == 2" /> -->
    <div v-if="getPage > 1">{{ close() }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Start from "./start";
// import Wash from "./wash";
import Character from "./character";
// import { log } from "three";

export default {
  name: "App",
  components: {
    // MaterialModal,
    // Wash,
    Start,
    Character,
  },
  computed: {
    ...mapGetters({
      getThumbnail: "lesson/thumbnail",
      getPage: "modal/page",
      getMaxPage: "modal/maxPage",
    }),
  },
  data() {
    return {
      id: 1,
      user: null,
      isMainModalEnabled: false,
      thumbnail: [],
    };
  },
  methods: {
    ...mapMutations({
      setThumbnail: "lesson/THUMBNAIL_UPDATED",
      setPage: "modal/PAGE_UPDATED",
      setAnimal: "animal/ANIMALS_UPDATED",
    }),
    prev() {
      if (this.page > 0) {
        this.page -= 1;
      }
    },
    next() {
      if (this.page < 2) {
        this.page += 1;
      }
    },
    close() {
      this.$emit("close");
    },
  },
  created() {
    this.setPage(0);
    this.$http
      .get(`http://127.0.0.1:3000/animal`)
      .then((res) => {
        const animals = res.data;

        if (animals) {
          for (let i = 0; i < animals.length; i++) {
            console.log(i);
            animals[i].image = `/images/${animals[i].image}`;
            animals[i].hover_image = `/images/${animals[i].hover_image}`;
          }
          this.setAnimal(animals);
        }
        console.log("animal", animals);
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
        console.log("실패");
      });
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
