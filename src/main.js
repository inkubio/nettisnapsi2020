import VueRouter from "vue-router";
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

import Test from '@/components/Test';
import Background from "@/components/Background";
import Article from "@/components/Article";

const routes = [
  {
    path: '/paakirjoitus', component: Article, props: {title: "Pääkirjoitus"}
  },
  {
    path: '/horoskooppi', component: Test
  },
  {
    path: '/urheiluhaastis', component: Test
  },
  {
    path: '/etaelaminen', component: Test
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
