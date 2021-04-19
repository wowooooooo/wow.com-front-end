<template>
  <span class="input-search">
    <input
      ref="inputEl"
      type="text"
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @keyup.enter="onSearch"
    />
    <search theme="outline" size="24" fill="#d9d9d9" @click="onSearch" />
  </span>
</template>

<script>
import { ref } from "vue";
import { Search } from "@icon-park/vue-next";
export default {
  setup() {
    const inputEl = ref(null);

    return {
      inputEl,
    };
  },
  components: {
    Search,
  },
  props: {
    placeholder: String,
    value: String,
  },
  mounted() {
    this.inputEl.focus();
  },
  methods: {
    onSearch() {
      this.$emit("search", this.value);
    },
  },
};
</script>

<style lang="less" scoped>
.input-search {
  display: inline-flex;
  box-sizing: border-box;
  width: 100%;
  padding: 6.5px 11px;
  border-width: 1px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;

  &:hover,
  &:focus {
    border-color: var(--primary-color);
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  }
}
.input {
  display: inline-block;
  width: 100%;
  padding: 0;
  border: none;
  height: 25px;
  line-height: 32px;
  outline: none;
  overflow: visible;
  font-size: 16px;

  &::placeholder {
    color: rgb(191 191 191);
  }
}

.i-icon-search {
  display: flex;
  cursor: pointer;
}
.i-icon-search:hover /deep/ path {
  stroke: var(--primary-color);
}
</style>
