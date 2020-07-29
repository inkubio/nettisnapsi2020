import VueRouter from "vue-router";
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

import Test from '@/components/Test';

const routes = [
  {
    path: '/paakirjoitus', component: Test
  },
  {
    path: '/horoskooppi', component: Test
  },
  {
    path: '/urheiluhaastis', component: Test
  },
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
