<template>
  <div class="search-engine-wrap">
    <a-button
      type="link"
      v-for="(engine, index) in engines"
      :key="engine.key"
      :class="{ active: index === engineIndex }"
      @click="changeEngine(index)"
      >{{ engine.name }}</a-button
    >
  </div>

  <a-input-search
    ref="search-input"
    size="large"
    class="search-input"
    v-model:value="input"
    placeholder="搜索"
    @search="onSearch"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
const enginesData = [
  {
    key: "bing.com",
    name: "Bing",
    queryURL: "https://www.bing.com/search?q=%s&FORM=CHROMN",
  },
  {
    key: "baidu.com",
    name: "Baidu",
    queryURL: "https://www.baidu.com/s?wd=%s",
  },
  {
    key: "google.com",
    name: "Google",
    queryURL: "https://www.google.com/search?q=%s",
  },
  {
    key: "github.com",
    name: "Github",
    queryURL: "https://github.com/search?q=%s",
  },
  {
    key: "npmjs.com",
    name: "npm",
    queryURL: "https://www.npmjs.com/search?q=%s",
  },
  {
    key: "gitee.com",
    name: "Gitee",
    queryURL: "https://search.gitee.com/?type=repository&q=%s",
  },
];

export default defineComponent({
  setup() {
    const input = ref("");
    const engines = ref(enginesData);
    const engineIndex = ref(0);

    const onSearch = (searchValue) => {
      const engine = engines.value[engineIndex.value];
      const queryURL = engine.queryURL.replace("%s", searchValue);
      window.open(queryURL, "_blank");
    };

    const changeEngine = (index) => {
      engineIndex.value = index;

      if (input.value !== "") {
        onSearch(input.value);
      }
    };

    return {
      input,
      engineIndex,
      engines,
      onSearch,
      changeEngine,
    };
  },
});
</script>

<style lang="less" scoped>
.search-engine-wrap {
  .ant-btn-link {
    color: #666;

    &.active,
    &:hover {
      color: #1890ff;
    }
    &.active {
      border-color: transparent;
    }
  }
}
.search-input {
  max-width: 680px;
}
</style>
