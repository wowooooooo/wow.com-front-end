<template>
  <div class="main">
    <CategoryWrap title="热榜">
      <TopicCard title="知乎热榜" :list="zhiHuHotList" />
      <TopicCard title="掘金热门" :list="jueJinRecommended" />
      <TopicCard title="微博热搜" :list="weiboTop" />
    </CategoryWrap>

    <CategoryWrap v-for="(sites, key) in categories" :key="key" :title="key">
      <SiteCard v-for="site in sites" :data="site" :key="site.name" />
    </CategoryWrap>
  </div>
</template>

<script>
import CategoryWrap from "./CategoryWrap.vue";
import SiteCard from "./SiteCard.vue";
import TopicCard from "./TopicCard.vue";
import {
  getJueJinRecommended,
  getZhiHuHotList,
  getWeiboTop,
} from "../../src/api/index.js";

const categories = {
  阅读: [
    {
      name: "语雀",
      url: "https://www.yuque.com/explore/events",
      favicon:
        "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
      description: "十万阿里人都在用的笔记与文档知识库",
    },
    {
      name: "Readhub",
      url: "https://readhub.cn/",
      favicon:
        "https://cdn.readhub.cn/static/assets/png/readhub_logo.95007f61.png",
      description: "每天三分钟的科技新闻聚合阅读",
    },
    {
      name: "GeekPark",
      url: "http://www.geekpark.net/",
      favicon: "http://imgslim.geekpark.net/geekpark-icon-196-black.png",
      description: "最新的科技新闻动态",
    },
  ],
  "Vue 3.x": [
    {
      name: "Vue",
      url: "https://cn.vuejs.org/",
      favicon: "https://cn.vuejs.org/images/logo.png",
      description: "Vue官网",
    },
    {
      name: "Vue Router",
      url: "https://next.router.vuejs.org/zh/",
      favicon: "https://next.router.vuejs.org/logo.png",
      description: "Vue.js 官方的路由管理器",
    },
    {
      name: "Vuex",
      url: "https://next.vuex.vuejs.org/",
      favicon: "https://next.vuex.vuejs.org/logo.png",
      description: "专为 Vue.js 应用程序开发的状态管理模式",
    },
    {
      name: "Antd-Design-vue",
      url: "https://2x.antdv.com/components/overview-cn/",
      favicon: "https://qn.antdv.com/favicon.ico",
      description: "Ant Design 的 Vue 实现",
    },
    {
      name: "Element Plus",
      url: "https://element-plus.gitee.io/#/zh-CN",
      favicon: "https://element-plus.gitee.io/favicon.ico",
      description: "基于 Vue 3.0 的桌面端组件库",
    },
    {
      name: "NutUI 3.0",
      url: "https://nutui.jd.com/3x/",
      favicon:
        "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
      description: "京东风格的轻量级移动端 Vue 组件库",
    },
  ],
  React: [
    {
      name: "React",
      url: "https://zh-hans.reactjs.org/",
      favicon: "https://zh-hans.reactjs.org/favicon.ico",
      description: "用于构建用户界面的 JavaScript 库",
    },
    {
      name: "Redux",
      url: "https://redux.js.org/",
      favicon: "https://redux.js.org/img/favicon/favicon.ico",
      description: "A Predictable State Container for JS Apps",
    },
  ],
  图标字体: [
    {
      name: "IconPark",
      url: "https://iconpark.bytedance.com/official",
      favicon:
        "https://sf1-scmcdn-tos.pstatp.com/obj/goofy/bydesign/iconparksite/logo.svg",
      description: "丰富多彩的资源库免费使用",
    },
    {
      name: "IconFont",
      url: "https://www.iconfont.cn/",
      favicon:
        "https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico",
      description: "阿里巴巴矢量图标库",
    },
  ],
};

export default {
  setup() {
    return {
      categories,
    };
  },
  components: {
    CategoryWrap,
    SiteCard,
    TopicCard,
  },

  data() {
    return {
      jueJinRecommended: [],
      zhiHuHotList: [],
      weiboTop: [],
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.getJueJinRecommended();
      this.getZhiHuHotList();
      this.getWeiboTop();
    },
    async getJueJinRecommended() {
      try {
        const {
          data: { data },
        } = await getJueJinRecommended({
          client_type: 2608,
          cursor: "0",
          id_type: 2,
          limit: 20,
          sort_type: 200,
        });
        const list = [];
        data.forEach((d) => {
          const { item_type, item_info } = d;

          if (item_type === 14) {
            const { title, url } = item_info;
            list.push({
              title,
              url,
            });
          }
          if (item_type === 2) {
            const { title, link_url } = item_info.article_info;

            list.push({
              title,
              url: link_url || `https://juejin.cn/post/${item_info.article_id}`,
            });
          }
        });

        this.jueJinRecommended = list;
      } catch (error) {
        console.log("err", error);
      }
    },
    async getZhiHuHotList() {
      try {
        const {
          data: { data },
        } = await getZhiHuHotList();

        const list = data.map((d) => ({
          title: d.target.title,
          url: d.target.url,
          hot: d.detail_text,
        }));

        this.zhiHuHotList = list;
      } catch (error) {}
    },

    async getWeiboTop() {
      try {
        const { data } = await getWeiboTop();
        this.weiboTop = data;
      } catch (error) {}
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  flex: 1;
  margin: 0 24px;
}
</style>
