import DemoPage1 from '@/pages/DemoPage1.vue'
import DemoPage2 from '@/pages/DemoPage2.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import MissionContainer from '../nodemqtt/layouts/MissionContainer.vue'
import gameConfig from '../gameConfig'

Vue.use(VueRouter)

const routes = [
  { name: 'mission', path: '/mission/:id', component: MissionContainer, props: { config: gameConfig } },
  { name: 'demo2', path: '/demo2', component: DemoPage2 }
]

export default new VueRouter({
  routes // short for `routes: routes`
})
