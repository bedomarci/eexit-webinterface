import DemoPage1 from '@/pages/DemoPage1.vue'
import DemoPage2 from '@/pages/DemoPage2.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  { name: 'demo1', path: '/demo1', component: DemoPage1 },
  { name: 'demo2', path: '/demo2', component: DemoPage2 }
]

export default new VueRouter({
  routes // short for `routes: routes`
})
