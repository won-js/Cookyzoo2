<template>
  <section>
    <article>
      <Game />
    </article>
    <aside>
      <div class="aside-top">
        <div class="return-icon">돌아가기 버튼</div>
        <button class="entire-list" @click="entireButton()">전체순서</button>
      </div>
      <div class="cook-title">{{ getLessonName }}</div>
      <div class="cook-nav">
        <button class="previous-step" @click="previousVideo()">이전순서</button>
        <div class="current-list">{{ curStep + 1 }}</div>
        <button class="next-step" @click="nextVideo()">다음 순서</button>
      </div>
      <div class="cook-content">
        <div
          class="content-title"
          v-for="content in contents"
          v-bind:key="content.id"
        >
          <div @click="selectVideo(content.step)">
            {{ content.step }}.{{ content.name }}
          </div>
        </div>
      </div>
      <!-- <div class="cook-content" v-else>
        {{ contents[curStep].subtitle }}
      </div>
      <div class="cook-logo">
        <img src="cookyzoo.png" alt="" />
      </div> -->
    </aside>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Game from "@/components/Game.vue";

export default {
  name: "cook-sample",
  data() {
    return {
      contents: [
        {
          id: null,
          step: null,
          name: null,
          subtitle: null,
          video: null,
          lesson_id: null,
        },
      ],
      curStep: 0,
      curVideo: null,
      playVideo: null,
      entireList: true,
    };
  },
  components: {
    Game,
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
      this.setStep(this.curStep);
    },
  },
  methods: {
    ...mapMutations({
      setLessonId: "lesson/LESSON_ID_UPDATED",
      setContents: "game/CONTENTS_UPDATED",
      setStep: "game/STEP_UPDATED",
    }),
    ...mapActions({
      setLesson: "lesson/setLesson",
    }),
    nextVideo() {
      if (this.curStep + 1 < this.contents[this.contents.length - 1].step) {
        this.curStep += 1;
      } else {
        this.curStep = 0;
      }
    },
    previousVideo() {
      if (this.curStep + 1 > this.contents[0].step) {
        this.curStep -= 1;
      } else {
        this.curStep = this.contents[this.contents.length - 1].step - 1;
      }
    },
    selectVideo(order) {
      this.curStep = order - 1;
      this.specificButton();
    },
    entireButton() {
      this.entireList = true;
    },
    specificButton() {
      this.entireList = false;
    },
  },

  created() {
    this.setLessonId(1); // lesson id 1을 쓸 거 vuex에저장
    this.setLesson(); // lesson id 1의 데이터를 vuex에 저장
    this.setStep(0);
    this.$http
      .get(`http://127.0.0.1:3000/lesson-content/lesson/${this.getLessonId}`)
      .then((res) => {
        const contents = res.data.result;

        if (contents) {
          this.contents = contents;
          this.curVideo = this.getVideo;
        }
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
      });
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

  /* background-image: url("../assets/images/cooksample.jpg"); */
  /* background-size: 100% 100%; */

  flex: 8;
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
aside .aside-top {
  flex: 0.5;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: row;
}
aside .aside-top .return-icon {
  /*        border: 1px solid #e58e26;*/
  flex: 1;
  justify-content: space-between;
}

aside .aside-top .entire-list {
  /*        border: 1px solid #e58e26;*/
  flex: 0.3;
  justify-content: space-between;
}

aside .cook-title {
  /*        border: 1px solid #b71540;*/
  flex: 0.5;
  margin: 0 auto;
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
