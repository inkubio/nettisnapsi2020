import VueRouter from "vue-router";
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

import Background from "@/components/Background";
import Article from "@/components/Article";
import Paakirjoitus from "@/components/Paakirjoitus";
import Urheiluhaastis from "@/components/Urheiluhaastis";

const routes = [
  {
    path: '/paakirjoitus', component: Paakirjoitus,
  },
  {
    path: '/horoskooppi', component: Article
  },
  {
    path: '/murheiluruutu', component: Urheiluhaastis
  },
  {
    path: '/etaelaminen', component: Article
  },
  {
    path: '/', component: Background
  }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
