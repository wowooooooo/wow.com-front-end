<template>
  <div class="topic-card">
    <h3 class="title">{{ title }}</h3>
    <div class="content">
      <ul v-for="(item, index) in list" :key="index">
        <li>
          <a :href="item.url" target="_blank" :title="item.title"
            >{{ index + 1 }}. {{ item.title }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    list: Array,
  },
};
</script>

<style lang="less" scoped>
.topic-card {
  width: 410px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin: 7px;
}
.title {
  color: #17233d;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  height: 42px;
  line-height: 42px;
  padding-left: 16px;
}
.content {
  padding: 0 16px;
  height: 158px;
  overflow-y: auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-decoration: none;
    color: #2e3135;
    font-size: 14px;
    font-weight: 600;

    &:visited {
      color: #909090;
    }
  }
}
</style>
