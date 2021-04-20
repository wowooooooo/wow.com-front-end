<template>
  <div class="site-card" :style="renderBackgroundImage" @click="handleClick">
    <span class="title" :title="data.name">{{ data.name }}</span>
    <span class="description" :title="data.description">{{
      data.description
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    renderBackgroundImage() {
      return {
        "background-image": `url(${this.data.favicon})`,
        "background-repeat": "no-repeat",
        "background-size": "38px",
        "background-position": "left 12px center",
      };
    },
  },
  methods: {
    handleClick() {
      window.open(this.data.url, "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
.site-card {
  width: 226px;
  height: 66px;
  padding-left: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  margin: 7px;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 112px;
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 20px;
  color: #999;
}
</style>
