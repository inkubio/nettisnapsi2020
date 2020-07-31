import VueRouter from "vue-router";
import vClickOutside from 'v-click-outside'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(vClickOutside);

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
  },
  {
    path: '*', redirect: '/'
  }
];

const router = new VueRouter({routes, mode: 'history', base: 'snapsi2020'})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
