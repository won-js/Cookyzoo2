<template>
  <div class="home">
    <h1>나는</h1>
    <Gamemain />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Gamemain from "@/components/Gamemain.vue";

export default {
  name: "Home",
  components: {
    Gamemain,
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
video {
  width: 100%;
}
</style>
