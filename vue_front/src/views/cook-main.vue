<template>
  <section>
    <article>
      <p>초코 쿠키 클래스 : 단숨에 제작하는 렌지쿠키 초코렛맛 1편</p>
      <img
        style="width: 1200px; height: 700px"
        src="../assets/images/cooksample.jpg"
        alt=""
      />
      <button v-on:click="onClick">요리 시작하기</button>
    </article>
    <aside>
      <div class="side-text">
        <p>{{ className }}</p>
        <p>간단한 재료만으로 만들어보는 바삭말랑 초코쿠키</p>
        <p>필요 재료</p>
        <p>밀가루 반죽, 초콜렛, 손가락...</p>
        수업 시작하기 버튼을 누르면 수업이 시작됩니다.
      </div>
      <div class="side-logo">
        <img src="@/assets/images/cookyzoo.png" alt="" />
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  data() {
    return {
      className: "초코쿠키",
      class: {
        name: "무야호",
      },
    };
  },
  methods: {
    onClick() {
      this.$router.push({ path: "cook-character" });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/cook-style.css";

section {
  background-color: #3f3f37;
}

p {
  color: white;
}

article img {
}

aside {
  color: #000;
}

.side-tab {
  height: 200px;
}
.side-text {
  flex: 1;
}
.side-logo {
  text-align: right;
}
.side-logo img {
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
}
article img {
  width: 500px;
  height: 500px;
}
</style>
