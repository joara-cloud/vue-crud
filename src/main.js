import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import {formatDate} from "./utils/filters.js";

Vue.filter('formatDate', formatDate); // filter를 전역으로 등록
Vue.config.productionTip = false;

new Vue({
  // el: '#app' // 인스턴스가 생성될 때 element를 지정하는 것 (el, $mount의 차이점)
  router,
  store,
  render: h => h(App)
}).$mount("#app"); // 생성하고 나서 인스턴스가 마운트 되는 포인트를 잡아주는것 (el, $mount의 차이점 => 사용하는 면에서는 차이가 없음)
