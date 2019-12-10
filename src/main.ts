import Vue from 'vue'
import store from './store'
import MQTTAgentPlugin from './nodemqtt/plugins/MQTTAgentPlugin'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import GameContainer from './nodemqtt/layouts/GameContainer.vue'
import GameConfig from './nodemqtt/interfaces/GameConfigInterface'
import NodeMQTTPluginOption from './nodemqtt/interfaces/NodeMQTTPluginOptionInterface'

Vue.config.productionTip = false

let gameConfig: GameConfig = {
  server: {
    // host: 'localhost',
    host: 'broker.orangepixel.hu',
    port: 8884,
    username: 'eexit',
    rejectUnauthorized: false,
    protocol: 'wss',
    password: 'Cirkusz1984',
    clientId: 'eexit_dashboard' + Math.random().toString(16).substr(2, 8)
  },
  gameId: 'secret-subway',
  gameName: 'Secret Subway',
  targetTime: 1000,
  defaultLanguage: 'HUN',
  languages: ['HUN', 'ENG'],
  languageDependentNodes: ['ABC', 'ASD', 'A23'],
  missions: [
    {
      missionId: 'office',
      targetTime: 900,
      nodes: ['metro-dimmer']
    }
  ],
  nodes: [
    {
      id: 'metro-dimmer',
      commonName: 'Metro dimmer',
      baseTopic: 'MTMETRODIMMER',
      initState: 'INIT',
      states: ['INIT', 'MAINTAIN', 'DISABLE']
    }
  ]
}
let options: NodeMQTTPluginOption = { store: store, config: gameConfig }
Vue.use(new MQTTAgentPlugin(), options)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(GameContainer, { props: { config: gameConfig } })
}).$mount('#app')
