import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MQTTAgentPlugin from './plugins/MQTTAgentPlugin'
import vuetify from './vuetify'
import router from './router'
import Layout from '@/layouts/Layout.vue'

Vue.config.productionTip = false
Vue.use(new MQTTAgentPlugin(), store)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(Layout)
}).$mount('#app')
