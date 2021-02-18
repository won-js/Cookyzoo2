<template>
  <section>
    <article>
      5. 영역확인 (-> 6. 수업시작전준비대기)
      <button v-on:click="onClick">다음으로</button>
    </article>
    <aside></aside>
  </section>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({ path: "cook-ready" });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/cook-style.css";
</style>
