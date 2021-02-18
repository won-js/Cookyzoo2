<template>
  <div class="modal">
      <div class="overlay" @click="$emit('close-modal')"></div>
        <div class="modal-card">
            <slot />
            <button>넘어가기 테스트</button>
            {{ user.name }}
asdf
        </div>
    </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.$http
      .get("/api/test")
      .then(res => {
        const user = res.data.user;

        if (user) this.user = user; // user값이 유효하면, this.user에 대입.
      })
      .catch(err => {
        console.error(err);
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
  left: 0; top: 0;
}

.overlay {
  opacity: 0.5;
  background-color: black;
}

.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>
