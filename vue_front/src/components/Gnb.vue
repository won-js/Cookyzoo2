<template>
  <header>
    <nav id="gnb">
      <div class="logo">
        <img src="../assets/logo2.png" alt="회사 로고" />
      </div>
      <div class="menu">
        <!-- Global, Local, Side, Footer NB-->
        <router-link to="/cook">수업하기</router-link>
        <a href="">재료준비</a>
        <a href="">장바구니</a>
        <a href="">마이페이지</a>
        <a href="">global</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
}

nav {
  width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.menu a {
  margin: 5px;
  color: blue;
}
</style>
