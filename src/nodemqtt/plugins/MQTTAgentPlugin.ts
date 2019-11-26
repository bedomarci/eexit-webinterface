import _Vue, { PluginObject } from 'vue'
import mqtt from 'mqtt'
import Vuex from 'vuex'
import NodeStoreModule from '../store/NodeStoreModule'
import MQTTAgent from '../MQTTAgent'
import HeartbeatObserverPlugin from './HeartbeatObserverPlugin'
import LogObserverPlugin from './LogObserverPlugin'
import GameStoreModule from '../store/GameStoreModule'
import TimerClockworkPlugin from './TimerClockworkPlugin'
import GameLanguageSetterPlugin from './GameLanguageSetterPlugin'

export default class MQTTAgentPlugin implements PluginObject<any> {
// export default class MQTTAgentPlugin implements PluginObject<MQTTAgentPluginOptions> {
  private agent: MQTTAgent = new MQTTAgent();

  get client (): mqtt.MqttClient {
    return this.agent.client
  }

  install (Vue: typeof _Vue, options : any) {
    this.agent.store = options.store
    options.store.registerModule('nodes', NodeStoreModule)
    options.store.registerModule('game', GameStoreModule)
    Vue.prototype.$agent = this.agent
    var pluginOption = { ...options, agent: this.agent }
    this.initializeConnection(options)
    this.initializeGame(options)
    _Vue.use(new HeartbeatObserverPlugin(), pluginOption)
    _Vue.use(new LogObserverPlugin(), pluginOption)
    _Vue.use(new TimerClockworkPlugin(), pluginOption)
    _Vue.use(new GameLanguageSetterPlugin(), pluginOption)
  }

  initializeGame ({ store, config }) {
    store.commit('game/registerGame', { gameId: config.gameId })
  }
  initializeConnection ({ config }) {
    this.agent.registerTopicPrefix('EEXIT/')
    this.agent.connect(config.server)
  }
}
