import Vue from 'vue'
import store from './store'
import MQTTAgentPlugin from './nodemqtt/plugins/MQTTAgentPlugin'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import GameContainer from './nodemqtt/layouts/GameContainer.vue'
import NodeMQTTPluginOption from './nodemqtt/interfaces/NodeMQTTPluginOptionInterface'
import gameConfig from './gameConfig'

Vue.config.productionTip = false

let options: NodeMQTTPluginOption = { store: store, config: gameConfig }
Vue.use(new MQTTAgentPlugin(), options)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(GameContainer, { props: { config: gameConfig } })
}).$mount('#app')
