<template>
  <button class="w-btn" :class="'w-btn-' + type"><slot></slot></button>
</template>

<script>
export default {
  props: {
    type: {
      validator: (v) => ["text", "link"].indexOf(v) !== -1,
    },
  },
};
</script>

<style lang="less" scoped>
.w-btn {
  background: transparent;
  outline: none;
  padding: 0 15px;
  border-width: 1px;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 12px;
}
.w-btn-text {
  border-color: transparent;
  color: #666;

  &:hover {
    color: var(--primary-color);
  }
}
</style>
