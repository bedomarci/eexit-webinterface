import _Vue, { PluginObject } from 'vue'
import Vuex from 'vuex'
import EventBus, { DEVICE_OFFLINE, DEVICE_ONLINE, SAVING_PAYLOAD } from '../events/EventBus'

export default class HeartbeatObserverPlugin implements PluginObject<any> {
    private _hearts: any[] = [];
    private _store: Vuex.Store;

    install (Vue: typeof _Vue, { store }) {
      this._store = store
      EventBus.$on(SAVING_PAYLOAD, (payload) => {
        if (payload.subTopic === '/hrtbt') {
          payload.message['lastHeartbeat'] = new Date().getTime()
          if (!payload.message['online']) {
            clearTimeout(this._hearts[payload.baseTopic])
            store.commit('nodes/saveNodeState', { baseTopic: payload.baseTopic, subTopic: 'online', message: true })
            EventBus.$emit(DEVICE_ONLINE, payload.baseTopic)
          }
          this._hearts[payload.baseTopic] = setTimeout(function () {
            this.setOffline(payload.baseTopic)
          }.bind(this, payload), 12000)
        }
      })
    }

    setOffline (baseTopic: string) {
      this._store.commit('nodes/saveNodeState', { baseTopic: baseTopic, subTopic: 'online', message: false })
      EventBus.$emit(DEVICE_OFFLINE, baseTopic)
    }
}
