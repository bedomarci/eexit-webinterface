import _Vue, { PluginObject } from 'vue'
import Vuex from 'vuex'
import EventBus, { PAYLOAD_SAVED } from '@/plugins/EventBus'

const ARCHIVE_KEY = 'logArchive'
const ARCHIVE_CAPACITY = 4

export default class LogObserverPlugin implements PluginObject<Vuex.Store> {
  install (Vue: typeof _Vue, store: Vuex.Store) {
    EventBus.$on(PAYLOAD_SAVED, (payload) => {
      if (payload.subTopic === '/hrtbt') {
        payload.subTopic = ARCHIVE_KEY
        payload.limit = ARCHIVE_CAPACITY
        store.dispatch('nodes/accumlateMessage', payload)
      }
    })
  }
}
