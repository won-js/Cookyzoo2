<template>
  <div id="Home">
    <section>
      <video src="@/assets/videos/sample2.mp4" autoplay muted loop></video>
    </section>
    <Footer />
  </div>
</template>  <script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Footer },
};
</script>  <style scoped>
.home {
  height: 100vh;
}
video {
  width: 100%;
}
</style>