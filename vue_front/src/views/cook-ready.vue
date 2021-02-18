<template>
  <section>
    <article>
      6. 수업시작전준비대기 (-> 7. 수업시작,루틴시작)
      <button v-on:click="onClick">다음으로</button>
    </article>
    <aside></aside>
  </section>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({ path: "cook-routine" });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/cook-style.css";
</style>
