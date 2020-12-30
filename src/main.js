import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './route'
import "./assets/css/tailwind.css"
import VueGtag from "vue-gtag";

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes
})

Vue.use(VueGtag, {
  config: { id: "UA-186205576-1" }
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
