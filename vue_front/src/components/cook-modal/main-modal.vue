<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <slot />
      <img src="" alt="" />
      <button @click="isMainModalEnabled = true">넘어가기 테스트</button>
      <MaterialModal
        v-if="isMainModalEnabled"
        @close-modal="isMainModalEnabled = false"
      ></MaterialModal>
    </div>
  </div>
</template>

<script>
import MaterialModal from "./material-modal";

export default {
  name: "App",
  components: {
    MaterialModal,
  },
  data() {
    return {
      user: null,
      isMainModalEnabled: false,
    };
  },
  created() {
    this.$http
      .get("/api/test")
      .then((res) => {
        const user = res.data.user;

        if (user) this.user = user; // user값이 유효하면, this.user에 대입.
      })
      .catch((err) => {
        // console.error(err);
        console.log(err);
      });
  },
};
</script>

<style>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.overlay {
  opacity: 0.5;
  background-color: black;
}

.modal-card {
  /* position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px; */
  background-color: white;
  /* min-height: 500px;
  z-index: 10;
  opacity: 1; */
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
}

button {
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  font-size: 50px;
}
</style>
