<template>
  <div class="layout">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <!-- <Nav /> -->
      <Main />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";
</script>

<style>
:root {
  --primary-color: #06a17e;
  --border-color: #f4f4f4;
}
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style lang="less" scoped>
.header {
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
}
.content {
  display: flex;
  // border: 1px solid @border-color;
}
</style>
