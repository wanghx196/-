import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.css";

Vue.use(ElementUI);
// 引入echarts
// import * as Echarts from "echarts";
import Echarts from "echarts";
import VueEcharts from "vue-echarts";

Vue.prototype.$echarts = Echarts;
Vue.component("v-chart", VueEcharts);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
