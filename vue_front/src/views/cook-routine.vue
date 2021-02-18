<template>
  <section>
    <article>
      <!-- <Gamemain /> -->
    </article>
    <aside></aside>
  </section>
</template>

<script>
// import Gamemain from "@/components/Gamemain.vue";

export default {
  components: {
    // Gamemain,
  },
  methods: {
    onClick() {
      this.$router.push({ path: "cook-material" });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/cook-style.css";

article {
  height: 100vh;
}

video {
  width: 100%;
}
</style>
