import Vue from 'vue'
import App from './App.vue'
import blogRoutes from "./router1/router";

import VueRouter from "vue-router";

Vue.use(VueRouter)

const blogrouter = new VueRouter({
  routes:blogRoutes,
  mode:'history'
})



new Vue({
  render: h => h(App),
  router:blogrouter
}).$mount('#app')
