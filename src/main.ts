import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MQTTAgentPlugin from './nodemqtt/plugins/MQTTAgentPlugin'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
// import Layout from '@/nodemqtt/layouts/Layout.vue'
import GameContainer from '@/nodemqtt/layouts/GameContainer.vue'

Vue.config.productionTip = false

let gameConfig = {
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
  targetTime: 60,
  defaultLanguage: 'HUN',
  languages: ['HUN', 'ENG'],
  languageDependentNodes: ['ABC', 'ASD', 'A23'],
  nodes: [
    {
      baseTopic: 'MTMETRODIMMER',
      states: ['INIT', 'MAINTAIN', 'DISABLE']
    }
  ]
}

Vue.use(new MQTTAgentPlugin(), { store: store, config: gameConfig })

new Vue({
  store,
  router,
  vuetify,
  render: h => h(GameContainer, { props: { config: gameConfig } })
}).$mount('#app')
