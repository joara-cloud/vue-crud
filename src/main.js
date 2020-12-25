import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import axios from "./api";

Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount("#app");
