<template>
  <div id="app">
<<<<<<< HEAD
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
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
>>>>>>> e31593e9a1d0e07758e63968a3f009c396304c11
}
</style>
