<template>
  <div>
    <start v-if="getPage == 0" />
    <character v-else-if="getPage == 1" />
    <wash v-else-if="getPage == 2" />
    <div v-if="getPage > 2">{{ $emit("close") }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Start from "./start";
import Wash from "./wash";
import Character from "./character";

export default {
  name: "App",
  components: {
    // MaterialModal,
    Wash,
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
      setLessonId: "lesson/LESSON_ID_UPDATED",
      setPage: "modal/PAGE_UPDATED",
    }),
    ...mapActions({
      setLesson: "lesson/setLesson",
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
  },
  created() {
    this.setPage(0);
    this.setLessonId(2);
    this.setLesson();
    console.log(this.getThumbnail);
  },
};
</script>
