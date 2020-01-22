import _Vue, { PluginObject } from 'vue'
import mqtt from 'mqtt'
import NodeStoreModule from '../store/NodeStoreModule'
import MQTTAgent from '../utils/MQTTAgent'
import HeartbeatObserverPlugin from './HeartbeatObserverPlugin'
import LogObserverPlugin from './LogObserverPlugin'
import GameStoreModule from '../store/GameStoreModule'
import TimerClockworkPlugin from './TimerClockworkPlugin'
import GameLanguageSetterPlugin from './GameLanguageSetterPlugin'
import NodeMQTTPluginOption from '../interfaces/NodeMQTTPluginOptionInterface'

export default class MQTTAgentPlugin implements PluginObject<NodeMQTTPluginOption> {
  private agent: MQTTAgent = new MQTTAgent();

  get client (): mqtt.MqttClient {
    return this.agent.client
  }

  install (Vue: typeof _Vue, options: NodeMQTTPluginOption) {
    this.agent.store = options.store
    options.store.registerModule('nodes', NodeStoreModule)
    options.store.registerModule('game', GameStoreModule)
    Vue.prototype.$agent = this.agent
    var pluginOption = { ...options, agent: this.agent }
    this.initializeConnection(options)
    this.initializeGame(options)
    this.registerNodes(options)
    _Vue.use(new HeartbeatObserverPlugin(), pluginOption)
    _Vue.use(new LogObserverPlugin(), pluginOption)
    _Vue.use(new TimerClockworkPlugin(), pluginOption)
    _Vue.use(new GameLanguageSetterPlugin(), pluginOption)
  }

  initializeGame ({ store, config }) {
    store.commit('game/registerGame', { gameId: config.gameId })
  }

  registerNodes ({ config }) {
    config.nodes.forEach(node => this.agent.registerNode(node.baseTopic))
  }

  initializeConnection ({ config }) {
    this.agent.registerTopicPrefix('EEXIT/')
    this.agent.connect(config.server)
  }
}
