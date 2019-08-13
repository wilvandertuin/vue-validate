import Vue from "vue";
import App from "./App.vue";
import { validate } from "./validate";

Vue.config.productionTip = false;

Vue.directive("validate", validate);

new Vue({
  render: h => h(App)
}).$mount("#app");
