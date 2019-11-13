import _Vue, { PluginObject } from 'vue'
import Vuex from 'vuex'
import EventBus, { LANGUAGE_CHANGED } from '../events/EventBus'

export default class GameLanguageSetterPlugin implements PluginObject<Vuex.Store> {
  install (Vue: typeof _Vue, { store, agent, config }) {
    // register language change listener
    EventBus.$on(LANGUAGE_CHANGED, (payload) => {
      config.languageDependentNodes.forEach(node => agent.publish(node + '/lang', { data: payload.language }))
    })
    // set default language on startup
    store.dispatch('game/selectLanguage', { gameId: config.gameId, language: config.defaultLanguage })
  }
}
