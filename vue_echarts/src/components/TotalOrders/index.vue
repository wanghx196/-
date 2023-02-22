<template>
  <common-card title="累计订单量" :value="orderToday">
    <template>
      <!-- <v-chart :options="getOptions()"/> -->
      <div id="boxecharts"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{ orderLastDay }}</span>
    </template>
  </common-card>
</template>

<script>
import * as Echarts from "echarts";
import commonCardMixin from "@/mixin/commonCardMixin";
import commonCardData from "@/mixin/commonCardData";

export default {
  mixins: [commonCardMixin, commonCardData],
  data() {
    return {
      orderTrendbb: null,
    };
  },

  async mounted() {
    setTimeout(() => {
      this.getcharts();
    }, 800);
  },
  methods: {
    // getOptions() {
    //   console.log(this.orderTrend.length);
    //   return this.orderTrend.length > 0
    //     ? {
    //         xAxis: {
    //           type: "category",
    //           show: true,
    //           boundaryGap: true,
    //         },
    //         yAxis: {
    //           show: true,
    //         },
    //         series: [
    //           {
    //             type: "line",
    //             data: this.orderTrend,
    //             areaStyle: {
    //               color: "purple",
    //             },
    //             lineStyle: {
    //               width: 0,
    //             },
    //             itemStyle: {
    //               opacity: 0,
    //             },
    //             smooth: false,
    //           },
    //         ],
    //         grid: {
    //           top: 0,
    //           bottom: 0,
    //           left: 0,
    //           right: 0,
    //         },
    //       }
    //     : null;
    // },

    getcharts() {
      // this.orderTrendbb = this.orderTrend;
      // console.log(this.orderTrendbb);
      var chartDom = document.getElementById("boxecharts");
      var myChart = Echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          show: true,
          boundaryGap: true,
        },
        yAxis: {
          show: true,
        },
        series: [
          {
            type: "line",
            data: this.orderTrend,
            areaStyle: {
              color: "purple",
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: false,
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      };
      option && myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
#boxecharts {
  width: 100%;
  height: 100%;
}
</style>
