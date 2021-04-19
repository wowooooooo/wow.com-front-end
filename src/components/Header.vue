<template>
  <div class="search-engine-wrap">
    <Button
      type="text"
      v-for="(engine, index) in engines"
      :key="engine.key"
      :class="{ active: index === engineIndex }"
      @click="onClickEngine(index)"
      >{{ engine.name }}</Button
    >
  </div>

  <InputSearch
    ref="inputRef"
    class="input-search"
    placeholder="搜索"
    v-model:value="input"
    @search="handleSearch(engines[engineIndex].queryURL)"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import Button from "./Button.vue";
import InputSearch from "./InputSearch.vue";
import useSearchInput from "../composables/useSearchInput";
import useEngines from "../composables/useEngines";

export default defineComponent({
  components: { Button, InputSearch },
  setup() {
    const inputRef = ref();
    const defaultEngine = parseInt(localStorage.getItem("enginIndex")) || 0;
    const { index: engineIndex, engines, handleChangeEngine } = useEngines(
      defaultEngine
    );
    const { input, handleSearch } = useSearchInput();

    /**
     * @desc 点击当前引擎，进入引擎首页；
     * @desc 输入框为空时，点击其他引擎，切换引擎；
     * @desc 输入框不为空时，点击其他引擎，进行检索；
     */
    const onClickEngine = (index) => {
      if (index === engineIndex.value || input.value !== "") {
        handleSearch(engines[engineIndex.value].queryURL);
      }

      handleChangeEngine(index);

      // 聚焦输入框
      inputRef.value.inputEl.focus();
    };

    return {
      inputRef,
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
  .w-btn-text {
    &.active {
      color: var(--primary-color);
    }
  }
}
.input-search {
  max-width: 680px;
}
</style>
