<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <slot />
      <!-- <img :src="thumbnail" alt="" /> -->
      <li v-for="(image, index) in thumbnail" v-bind:key="index">
        <img :src="image.thumbnail" />
      </li>
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
      id: 1,
      thumbnail: [],
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

    // this.$http
    //   .get(`http://127.0.0.1:3000/lessons/${this.id}`)
    //   .then((res) => {
    //     const thumbnail = res.data.thumbnail;

    //     if (thumbnail) {
    //       this.thumbnail = `images/lesson/${thumbnail}`; // user값이 유효하면, this.user에 대입.
    //     }
    //   })
    //   .catch((err) => {
    //     // console.error(err);
    //     console.log(err);
    //   });

    this.$http
      .get(`http://127.0.0.1:3000/lessons/find`)
      .then((res) => {
        this.thumbnail = res.data.result;

        // if (thumbnail) {
        //   this.thumbnail = `images/lesson/${thumbnail}`; // user값이 유효하면, this.user에 대입.
        // }
        for (let i = 0; i < this.thumbnail.length; i++) {
          this.thumbnail[
            i
          ].thumbnail = `images/lesson/${this.thumbnail[i].thumbnail}`;
        }
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
  width: 60%;
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
