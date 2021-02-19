<template>
  <main class="pink">
    <MaterialModal></MaterialModal>
    <section class="purple">
      <article class="display-red"></article>
      <aside class="list-yellow">
        <div class="side-title">
          <h2>
            초코 쿠키 클래스 :<br />
            엄마와 만드는 렌지쿠키 초코렛맛 1편
          </h2>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
          <div class="box-content">
            <div class="icon">#</div>
            <div class="content">1. 무얏호우</div>
            <div class="time">2:13</div>
          </div>
        </div>
        <div class="side-bar">
          <div class="left">← 이전 순서</div>
          <div class="cur">☆</div>
          <div class="right">다음 순서 →</div>
          <div>{{ user.name }}</div>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
import MaterialModal from "../components/cook-modal/material-modal";

export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    MaterialModal,
  },
  created() {
    this.$http
      .get("/api/test")
      .then(res => {
        const user = res.data.user;

        if (user) this.user = user; // user값이 유효하면, this.user에 대입.
      })
      .catch(err => {
        console.error(err);
      });
  },
};
</script>

<style scoped>

main {
  /* border: 1px solid pink; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("../assets/images/cooksample.jpg");
  /* background-image: url("../assets/images/bonam.png"); */
  background-size: 100% 100%;
  font-family: 'SpoMedium';
}

h2 {
  color: black;
  margin-top: 10px;
  margin-left: 10px;
}

.title-blue {
  /* border: 1px solid blue; */
  flex: 0.5;
}
section {
  /* border: 1px solid purple; */
  display: flex;
  flex: 10;
}
article {
  /* border: 1px solid red; */
  flex: 3;
}
aside {
  /* border: 1px solid yellow; */
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: -0.2em 0 0.35em rgba(255, 255, 255, 0.85);
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
}

aside .side-title {
  flex: 0.2;
}

aside .box-content {
  margin: 10px;
  color: black;

  display: flex;
  justify-content: space-around;

  flex: 0.5;
}

aside .side-bar {
  flex: 0.3;
  display: flex;
  justify-content: space-around;
  color: black;
  margin-top: 50px;
}
</style>
