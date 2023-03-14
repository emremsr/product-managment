import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import VueResource from "vue-resource";
import { store } from "./store/store";
import './index.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter("currency", (value) => {
  return (
    parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) +
    "EUR"
  );
});

export const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
