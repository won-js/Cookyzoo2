<template>
  <div></div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DemoCustomComponent from "./Modal_CustomComponent";

export default {
  name: "App",
  components: {
    // MaterialModal,
    DemoCustomComponent,
  },
  computed: {
    ...mapGetters({
      getThumbnail: "lesson/thumbnail",
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
  created() {
    this.$http
      .get(`http://127.0.0.1:3000/lessons/find`)
      .then((res) => {
        this.thumbnail = res.data.result;

        for (let i = 0; i < this.thumbnail.length; i++) {
          this.thumbnail[
            i
          ].thumbnail = `images/lesson/${this.thumbnail[i].thumbnail}`;
        }

        this.setThumbnail(this.thumbnail);

        this.$modal.show(
          DemoCustomComponent,
          {
            modal: this.$modal,
          },
          {
            width: "1500px",
            height: "1000px",
          },
        );
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
      });
  },
  methods: {
    ...mapMutations({
      setThumbnail: "lesson/THUMBNAIL_UPDATED",
    }),
  },
};
</script>
