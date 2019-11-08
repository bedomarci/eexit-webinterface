import _Vue, { PluginObject } from 'vue'
import mqtt from 'mqtt'
import Vuex from 'vuex'
import NodeStoreModule from './NodeStoreModule'
import MQTTAgent from './MQTTAgent'

export default class MQTTAgentPlugin implements PluginObject<Vuex.Store> {
// export default class MQTTAgentPlugin implements PluginObject<MQTTAgentPluginOptions> {
  private _agent: MQTTAgent = new MQTTAgent();

  get client (): mqtt.MqttClient {
    return this._agent.client
  }

  install (Vue: typeof _Vue, store: Vuex.Store) {
    this._agent.store = store
    store.registerModule('nodes', NodeStoreModule)
    Vue.prototype.$agent = this._agent
  }
}
