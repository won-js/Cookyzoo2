<template>
  <div id="app">
    <div class="container">
      <div v-if="check" class="gnb">
        <Gnb />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Gnb from "@/components/Gnb.vue";

export default {
  components: {
    Gnb,
  },
  data() {
    return {
      check: false,
    };
  },
};
</script>

<style>
/* reset.css */
h1,
h2,
h3,
h4,
h5,
h6,
video {
  margin: 0;
}
html,
body {
  margin: 0;
  padding: 0;
}
/* a-style */
a {
  color: #fff;
  text-decoration: none;
  outline: none;
}
a:hover,
a:active {
  text-decoration: none;
  color: #fff;
  background-color: #f59000;
}
.container {
}

header {
  display: flex;
  justify-content: center;
}
footer {
  height: 300px;
  background-color: cornflowerblue;
}
@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
  header {
    width: 100%;
  }
}
</style>
