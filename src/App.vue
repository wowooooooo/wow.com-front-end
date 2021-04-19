<template>
  <div class="content">
    <Header />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
:root {
  --primary-color: #1890ff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 24px;
}
</style>

<style lang="less" scoped>
.content {
  margin: 0 24px;
}
</style>
