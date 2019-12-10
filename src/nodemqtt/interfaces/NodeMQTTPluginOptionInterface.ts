import GameConfig from './GameConfigInterface'
import Vuex from 'vuex'
import MQTTAgent from '..//utils/MQTTAgent'

export default interface NodeMQTTPluginOption {
  store: Vuex.Store,
  config: GameConfig,
  agent?: MQTTAgent
}
