<template>
  <section>
    <article>
      <Gamemain />
      <video :src="curVideo" autoplay controls></video>
    </article>
    <aside>
      <div class="return-icon">돌아가기 버튼 아이콘</div>
      <div class="cook-title">{{ getLessonName }}</div>
      <div class="cook-nav">
        <button class="entire-list">전체순서</button>
        <div class="current-list">{{ curStep + 1 }}</div>
        <button class="next-step" @click="curStep += 1">다음 순서</button>
      </div>
      <div
        class="cook-content"
        v-for="content in contents"
        v-bind:key="content.id"
      >
        {{ content.step }}.{{ content.name }}
      </div>
      <div class="cook-logo">
        <img src="cookyzoo.png" alt="" />
      </div>
    </aside>
  </section>
</template>

<script>
// import MaterialModal from "../components/cook-modal/material-modal";
// import MainModal from "../components/cook-modal/main-modal";
import { mapGetters, mapMutations, mapActions } from "vuex";
import Gamemain from "../components/Gamemain.vue";

export default {
  name: "cook-sample",
  data() {
    return {
      contents: [],
      curStep: 0,
      curVideo: null,
    };
  },
  components: {
    // MaterialModal,
    // MainModal,
    Gamemain,
  },
  computed: {
    ...mapGetters({
      getLessonName: "lesson/name",
      getLessonId: "lesson/lessonId",
    }),
    getVideo() {
      return `videos/lesson_${this.getLessonId}/${
        this.contents[this.curStep].video
      }`;
    },
  },
  watch: {
    curStep() {
      this.curVideo = this.getVideo;
    },
  },
  methods: {
    ...mapMutations({
      setLessonId: "lesson/LESSON_ID_UPDATED",
    }),
    ...mapActions({
      setLesson: "lesson/setLesson",
    }),
  },
  created() {
    this.setLessonId(1); // lesson id 1을 쓸 거 vuex에 저장
    this.setLesson(); // lesson id 1의 데이터를 vuex에 저장
    this.$http
      .get(`http://127.0.0.1:3000/lesson-content/lesson/${this.getLessonId}`)
      .then((res) => {
        const contents = res.data.result;

        if (contents) {
          this.contents = contents;
          console.log(this.contents);
          this.curVideo = this.getVideo;
        }
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
      });
    // this.$modal.show(
    // 	MainModal,
    // 	{
    // 		modal: this.$modal,
    // 	},
    // 	{
    // 		clickToClose: false,
    // 		width: "70%",
    // 		height: "70%",
    // 	},
    // );
  },
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}

section {
  width: 100%;
  height: 100vh;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;

  font-family: "SpoMedium";
}
article {
  /*        border: 1px solid red;*/

  background-image: url("../assets/images/cooksample.jpg");
  background-size: 100% 100%;

  flex: 8;
}
article video {
  width: 100%;
}
aside {
  /*        border: 1px solid blue;*/
  flex: 2;
  background-color: #0f2232;
  color: aliceblue;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

aside .return-icon {
  /*        border: 1px solid #e58e26;*/
  flex: 0.5;
}
aside .cook-title {
  /*        border: 1px solid #b71540;*/
  flex: 1;
  font-size: 20px;
}
aside .cook-nav {
  /*        border: 1px solid #0c2461;*/
  flex: 0.5;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;

  justify-content: space-around;
  -ms-align-items: center;
  align-items: center;
}

.cook-nav .entire-list {
}
.cook-nav .current-list {
}
.cook-nav .next-step {
}

aside .cook-content {
  /*        border: 1px solid #82ccdd;*/
  flex: 6;
  font-size: 18px;

  text-align: center;
}
aside .cook-logo {
  /*        border: 1px solid #78e08f;*/
  flex: 1;
  text-align: right;
}

.cook-logo img {
  width: 30%;
  padding: 15px 15px 0 0;
}
</style>
