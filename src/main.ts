import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MQTTAgentPlugin from './plugins/MQTTAgentPlugin'
import { MQTTAgentPluginOptions } from '@/plugins/MQTTAgentPlugin'

Vue.config.productionTip = false
// let options = new MQTTAgentPluginOptions(store)

console.log(store)

Vue.use(new MQTTAgentPlugin(), store)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
