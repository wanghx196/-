<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
  </div>
</template>
<script>
import TopView from "@/components/Topview";
import SalesView from "@/components/SalesView";
import { woldcode, screenData, mapScatter } from "@/api/index";
export default {
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    };
  },
  components: {
    TopView,
    SalesView,
  },
  provide() {
    return {
      getWordCloud: this.getWordCloud,
      getReportData: this.getReportData,
      getMapData: this.getMapData,
    };
  },

  methods: {
    getWordCloud() {
      return this.wordCloud;
    },
    // 柱状图数据
    getReportData() {
      return this.reportData;
    },
    getMapData() {
      return this.mapData;
    },
  },
  mounted() {
    woldcode().then((res) => {
      this.wordCloud = res;
      console.log(res);
    });
    screenData().then((res) => {
      this.reportData = res;
      console.log(res);
    });
    mapScatter().then((res) => {
      this.mapData = res;
      console.log(res);
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>