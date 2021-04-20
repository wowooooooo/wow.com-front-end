<template>
  <ul class="navs">
    <li
      v-for="(nav, index) in navs"
      :key="nav.key"
      class="navs-item"
      :class="{ active: index === active }"
      @click="onClickNav(index)"
    >
      <a>{{ nav.name }}</a>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
const navs = [
  {
    key: "Vue",
    name: "Vue",
  },
  {
    key: "React",
    name: "React",
  },
  {
    key: "IconFont",
    name: "字体图标",
  },
];

export default {
  setup() {
    const active = ref(0);

    const onClickNav = (index) => {
      active.value = index;
    };

    return {
      navs,
      active,
      onClickNav,
    };
  },
};
</script>

<style lang="less" scoped>
.navs {
  width: 140px;
  height: calc(100vh - 121px);
  border-right: 1px solid var(--border-color);
  margin: 0;
  padding: 0;
  list-style: none;
}
.navs-item {
  text-align: left;
  padding-left: 20px;
  padding-right: 10px;
  line-height: 32px;
  cursor: pointer;
}
.navs-item:hover {
  color: var(--primary-color);
}
.active {
  color: var(--primary-color);
  background-color: #f8f9fa;
}
</style>
