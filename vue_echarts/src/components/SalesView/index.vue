<template>
  <div class="sales-view">
    <el-card>
      <template v-slot:header>
        <div class="menu">
          <div class="menu-left">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">销售额</el-menu-item>
              <el-menu-item index="2">访问量</el-menu-item>
            </el-menu>
          </div>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="本年"></el-radio-button>
            </el-radio-group>
            <!-- 选择日期 -->
            <el-date-picker
              v-model="date"
              size="small"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              class="sales-date-picker"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <!-- 销售额图标 -->
      <template>
        <div class="sales-charts">
          <el-row :gutter="20">
            <el-col :span="16">
              <div id="sales-charts-left">加载中...</div>
            </el-col>

            <el-col :span="8">
              <div class="sales-view-list">
                <div class="sales-view-title">排行榜</div>
                <div class="list-item-wrapper">
                  <div
                    class="list-item"
                    v-for="item in rankData"
                    :key="item.no"
                  >
                    <div
                      :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']"
                    >
                      {{ item.no }}
                    </div>
                    <div class="list-item-name">{{ item.name }}</div>
                    <div class="list-item-money">{{ item.money }}</div>
                  </div>
                </div>
              </div></el-col
            >
          </el-row>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
import commonCardData from "@/mixin/commonCardData";
export default {
  mixins: [commonCardData],
  data() {
    return {
      activeIndex: null,
      radioSelect: "本年",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },

  mounted() {
    this.render();
  },
  watch: {
    orderFullYear() {
      this.render(this.orderFullYear, this.orderFullYearAxis, "年度销售额");
    },
  },
  computed: {
    rankData() {
      return this.activeIndex === "1" ? this.orderRank : this.userRank;
    },
  },
  methods: {
    // 图像传值
    render(data, axis, title) {
      echarts.init(document.getElementById("sales-charts-left")).setOption({
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: axis,
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: data,
            type: "bar",
          },
        ],
      });
    },
    // 判断点击的是销售额还是访问量
    handleSelect(index) {
      this.activeIndex = index;
      if (index === "1") {
        // 当为销售额时
        this.render(this.orderFullYear, this.orderFullYearAxis, "年度销售额");
      } else {
        // 当为访问量时
        this.render(this.userFullYear, this.userFullYearAxis, "年度用户访问量");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sales-view {
  margin-top: 20px;
}
.menu {
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
}
.menu-right {
  line-height: 60px;
}
.sales-date-picker {
  margin-left: 20px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
#sales-charts-left {
  width: 100%;
  height: 300px;
}
.el-col {
  border-radius: 4px;
}
.sales-view-list {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .sales-view-title {
    margin-top: 20px;
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }

  .list-item-wrapper {
    margin-top: 15px;

    .list-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      height: 20px;
      padding: 6px 20px 6px 0;

      .list-item-no {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        color: #333;

        &.top-no {
          background: #000;
          border-radius: 50%;
          color: #fff;
          font-weight: 500;
        }
      }

      .list-item-name {
        margin-left: 10px;
        color: #333;
      }

      .list-item-money {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>