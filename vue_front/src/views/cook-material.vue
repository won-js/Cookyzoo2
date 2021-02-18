<template>
  <section>
    <article>
      4. 재료확인 (-> 5. 영역확인)
      <button v-on:click="onClick">다음으로</button>
    </article>
    <aside></aside>
  </section>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({ path: "cook-area" });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/cook-style.css";
</style>
