import _Vue, { PluginObject } from 'vue'
import Vuex from 'vuex'
import EventBus, { PAYLOAD_SAVED } from '../events/EventBus'

const ARCHIVE_KEY = 'logArchive'
const ARCHIVE_CAPACITY = 4

export default class LogObserverPlugin implements PluginObject<any> {
  install (Vue: typeof _Vue, { store }) {
    EventBus.$on(PAYLOAD_SAVED, (payload) => {
      if (payload.subTopic === '/log') {
        payload.subTopic = ARCHIVE_KEY
        payload.limit = ARCHIVE_CAPACITY
        store.dispatch('nodes/accumlateMessage', payload)
      }
    })
  }
}
