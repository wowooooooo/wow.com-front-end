<template>
  <div class="category-wrap">
    <h2 class="title">{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="less" scoped>
.title {
  line-height: 22px;
  color: #999;
  font-size: 14px;
  font-weight: 500;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
