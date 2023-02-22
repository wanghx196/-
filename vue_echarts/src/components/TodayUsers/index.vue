<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <template>
      <div id="orderUsersdata"></div>
      <!-- <v-chart :options="getOptions()" /> -->
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{ returnRate }}</span>
    </template>
  </common-card>
</template>

<script>
import * as echarts from "echarts";
// 导入数据data  和组件commoncard
import commonCardMixin from "../../mixin/commonCardMixin";
import commonCardData from "../../mixin/commonCardData";
export default {
	// mixins接收
  mixins: [commonCardData, commonCardMixin],

  data() {
    return {};
  },

  async mounted() {
    setTimeout(() => {
      this.getcharts();
    }, 800);
  },

  methods: {
    getcharts() {
      // this.orderTrendbb = this.orderTrend;
      // console.log(this.orderTrendbb);
      var chartDom = document.getElementById("orderUsersdata");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        series: [
          {
            name: "用户实时交易量",
            type: "bar",
            data: this.orderUserTrend,
            barWidth: "60%",
          },
        ],
        xAxis: {
          type: "category",
          data: this.orderUserTrendAxis,
          show: false,
        },
        yAxis: {
          show: false,
        },
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
#orderUsersdata {
  width: 100%;
  height: 100%;
}
</style>