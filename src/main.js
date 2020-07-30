import VueRouter from "vue-router";
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

import Background from "@/components/Background";
import Paakirjoitus from "@/components/Paakirjoitus";
import Urheiluhaastis from "@/components/Urheiluhaastis";
import Etaelaminen from "@/components/Etaelaminen";
import Horoskooppi from "@/components/Horoskooppi";

const routes = [
  {
    path: '/paakirjoitus', component: Paakirjoitus,
  },
  {
    path: '/horoskooppi', component: Horoskooppi
  },
  {
    path: '/murheiluruutu', component: Urheiluhaastis
  },
  {
    path: '/etaelaminen', component: Etaelaminen
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
