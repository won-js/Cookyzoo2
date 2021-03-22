<template>
  <section>
    <article>
      <Game />
    </article>
    <aside>
      <img class="aside-bg" src="../assets/images/bg.png"/>
      <div class="aside-top">
        <button class="return">
          <img src="../assets/images/back.png"/>
        </button>
        <button class="entire-list" @click="entireButton()">
          <img src="../assets/images/menu.png"/>
        </button>
      </div>
      <div class="cook-title">{{ getLessonName }}</div>
      <div class="cook-nav">
        <button class="previous-step" @click="previousVideo()">
          <img src="../assets/images/prev.png"/>
        </button>
        <div class="current-list">{{ curStep + 1 }}</div>
        <button class="next-step" @click="nextVideo()">
          <img src="../assets/images/next.png"/>
        </button>
      </div>
      <div class="cook-content" v-if="entireList">
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
      <div class="cook-content" v-else>
        {{ contents[curStep].subtitle }}
      </div>
      <div class="cook-logo">
        <img src="images/lesson/cookyzoo.png" alt="" />
      </div>
    </aside>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import MainModal from "@/components/cook-modal/main-modal.vue";
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
      entireList: false,
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
      setSuccess: "game/SUCCESS_UPDATED",
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
    this.setLessonId(2); // lesson id 1을 쓸 거 vuex에저장
    this.setLesson(); // lesson id 1의 데이터를 vuex에 저장
    this.setStep(0);
    this.setSuccess(false);
    this.$http
      .get(`http://127.0.0.1:3000/lesson-content/lesson/${this.getLessonId}`)
      .then((res) => {
        const contents = res.data;

        if (contents) {
          this.contents = contents;
          this.curVideo = this.getVideo;
          this.setContents(contents);
        }
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
        console.log("실패");
      });
    this.$modal.show(
      MainModal,
      {
        modal: this.$modal,
      },
      {
        clickToClose: false,
        width: "70%",
        height: "75%",
      }
    );
  },
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  /* width: 50vw; */
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
  background-color: #462f4d;
}
article {
  /*        border: 1px solid red;*/
  flex: 8;
}
aside {
  /*        border: 1px solid blue;*/
  flex: 2;
  color: aliceblue;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
aside .aside-bg {
  position: absolute;
  text-align: center;
  height: 92vh;
  width: 20vw;
  z-index: 1;
}
aside .aside-top {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 8vh;
  margin: 0;
  z-index: 2;
}
aside .aside-top .return img {
  /*        border: 1px solid #e58e26;*/
  height: 3.6vh;
  margin-left: 5vh;
}
aside .aside-top .entire-list img {
  /*        border: 1px solid #e58e26;*/
  height: 3.6vh;
  margin-right: 5vh;
}
aside .cook-title {
  /*        border: 1px solid #b71540;*/
  flex: 0.5;
  font-size: 4.5vh;
  text-align: center;
  font-family: "CookieRunOTF-Bold";
  padding: 1.4vh;
  z-index: 2;
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
  font-size: 1.2vw;
  z-index: 2;
  margin-top: 1vh;
}
aside .cook-nav img {
  height: 6vh;
  width: auto;
}
aside .cook-nav button {
  color: white;
  font-size: 1.2vw;
}
.cook-nav .entire-list {
}
.cook-nav .current-list {
  color: #7e4238;
  font-size: 4vh;
  font-family: "CookieRunOTF-Bold";
}
.cook-nav .next-step {
}
aside .cook-content {
  /*        border: 1px solid #82ccdd;*/
  flex: 3;
  color: #7e4238;
  font-size: 1.2vw;
  text-align: center;
  font-family: "TmoneyRoundWindExtraBold";
  margin-top: 3.8vh;
  padding-right: 3.5vh;
  padding-left: 3.5vh;
  line-height: 5vh;
  z-index: 2;
}
aside .cook-content .content-title {
  padding: 0.8vw;
}
aside .cook-logo {
  /*        border: 1px solid #78e08f;*/
  flex: 1;
  text-align: center;
  z-index: 2;
  height: 7vh;
  width: auto;
  margin-bottom: 15vh;
}
.cook-logo img {
  width: 50%;
  padding: 2vw 2vw;
}
</style>
