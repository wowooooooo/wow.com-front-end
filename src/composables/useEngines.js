import { ref } from "vue";

const engines = [
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

export default function useEngines(defaultIndex) {
  const index = ref(defaultIndex || 0);

  const handleChangeEngine = (idx) => {
    index.value = idx;
  };

  return {
    index,
    engines,
    handleChangeEngine,
  };
}
