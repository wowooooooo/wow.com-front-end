import { ref } from "vue";

export default function useSearchInput() {
  const input = ref("");

  const handleSearch = (queryURL) => {
    const url = queryURL.replace("%s", input.value);
    window.open(url, "_blank");
  };

  return {
    input,
    handleSearch,
  };
}
