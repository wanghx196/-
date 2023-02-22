// 所有的数据
function format(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  return `${v}`.replace(reg, "$&,");
}

function wrapperObject(o, k) {
  if (o && k.indexOf(".") >= 0) {
    const keys = k.split(".");
    keys.forEach((key) => {
      o = o[key];
    });
    return o;
  } else {
    return o && o[k] ? o[k] : {};
  }
}

function wrapperArray(o, k) {
  return o && o[k] ? o[k] : [];
}

// wrapperMoney(this.reportData, 'salesToday')
function wrapperMoney(o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : "¥ 0.00";
}

function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0;
}

function wrapperNumber(o, k) {
  return o && o[k] ? format(o[k]) : 0;
}

function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}%` : "0%";
}
export default {
  computed: {
    reportData() {
      return this.getReportData();
    },

    // 累计销售数据
    salesToday() {
      return wrapperMoney(this.reportData, "salesToday");
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, "salesGrowthLastDay");
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, "salesGrowthLastMonth");
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, "salesLastDay");
    },
    orderToday() {
      return wrapperNumber(this.reportData, "orderToday");
    },
    // 累计订单量
    orderLastDay() {
      return wrapperNumber(this.reportData, "orderLastDay");
    },
    orderTrend() {
      return wrapperArray(this.reportData, "orderTrend");
    },
    // 今日交易用户
    orderUser() {
      return wrapperNumber(this.reportData, "orderUser");
    },
    returnRate() {
      return wrapperPercentage(this.reportData, "returnRate");
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, "orderUserTrend");
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, "orderUserTrendAxis");
    },
    // 累计用户数
    userToday() {
      return wrapperNumber(this.reportData, "userToday");
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, "userToday");
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, "userLastMonth");
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, "userGrowthLastDay");
    },
    userGrowthLastMonth() {
      return wrapperNumber(this.reportData, "userGrowthLastMonth");
    },
    // 获取年度销售额和访问量
    orderFullYear() {
      return wrapperArray(this.reportData, "orderFullYear");
    },
    orderFullYearAxis() {
      return wrapperArray(this.reportData, "orderFullYearAxis");
    },
    orderRank() {
      return wrapperArray(this.reportData, "orderRank");
    },
    userFullYear() {
      return wrapperArray(this.reportData, "userFullYear");
    },
    userFullYearAxis() {
      return wrapperArray(this.reportData, "userFullYearAxis");
    },
    userRank() {
      return wrapperArray(this.reportData, "userRank");
    },
  },
  filters: {
    format(v) {
      return format(v);
    },
  },
  inject: ["getMapData", "getWordCloud", "getReportData"],
};
