<template>
  <div class="search-engine-wrap">
    <a-button
      type="link"
      v-for="(engine, index) in engines"
      :key="engine.key"
      :class="{ active: index === engineIndex }"
      @click="onClickEngine(index)"
      >{{ engine.name }}</a-button
    >
  </div>

  <a-input-search
    ref="search-input"
    size="large"
    class="search-input"
    v-model:value="input"
    placeholder="搜索"
    @search="handleSearch(engines[engineIndex].queryURL)"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import useSearchInput from "../composables/useSearchInput";
import useEngines from "../composables/useEngines";

export default defineComponent({
  setup() {
    const { index: engineIndex, engines, handleChangeEngine } = useEngines(1);
    const { input, handleSearch } = useSearchInput();

    const onClickEngine = (index) => {
      handleChangeEngine(index);

      if (input.value !== "") {
        handleSearch(engines[engineIndex.value].queryURL);
      }
    };

    return {
      engines,
      engineIndex,
      handleChangeEngine,
      input,
      handleSearch,
      onClickEngine,
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
