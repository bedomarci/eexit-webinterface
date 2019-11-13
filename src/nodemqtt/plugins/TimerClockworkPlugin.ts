import _Vue, { PluginObject } from 'vue'
import Vuex from 'vuex'
import EventBus, { START_TIMER, STOP_TIMER } from '../events/EventBus'

const ARCHIVE_KEY = 'logArchive'
const ARCHIVE_CAPACITY = 4

export default class TimerClockworkPlugin implements PluginObject<any> {
  timers: any[] = []
  install (Vue: typeof _Vue, { store, config }) {
    EventBus.$on(START_TIMER, (payload: any) => {
      if (this.timers[payload.gameId]) return
      this.timers[payload.gameId] = setInterval(() => store.dispatch('game/timeElapses', payload), 1000)
      store.commit('game/setTimerRunning', { ...payload, running: true })
    })
    EventBus.$on(STOP_TIMER, (payload: any) => {
      clearInterval(this.timers[payload.gameId])
      store.commit('game/setTimerRunning', { ...payload, running: false })
      this.timers[payload.gameId] = false
    })
    // set target time on startup
    store.commit('game/setTargetTime', { gameId: config.gameId, targetTime: config.targetTime })
  }
}
