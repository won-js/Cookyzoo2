<template>
  <section>
    <article>
      <img src="http://placehold.it/300x300" alt="" />
      <button>요리 시작하기</button>
    </article>
    <aside>
      <div class="side-tab">(( 메인화면 ))</div>
      <div class="side-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi libero
        reprehenderit repudiandae odit laborum iste.
      </div>
      <div class="side-logo">
        <img src="@/assets/cookyzoo.png" alt="" />
      </div>
    </aside>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: 100vh;
}
article {
  flex: 3;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

aside {
  flex: 1;
  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  background-image: url("../assets/domaback1.jpg");
  background-size: 100% 100%;
}

.side-tab {
  height: 200px;
}
.side-text {
  flex: 1;
}
.side-logo {
  text-align: right;
}

.side-logo img {
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
}

article img {
  width: 500px;
  height: 500px;
}

button {
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  font-size: 50px;
}
</style>
