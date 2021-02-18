<template>
  <section>
    <article>
      2. 캐릭터선택(->3.손씻기)
      <button v-on:click="onClick">다음으로</button>
    </article>
    <aside></aside>
  </section>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({ path: "cook-wash" });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/cook-style.css";
</style>
