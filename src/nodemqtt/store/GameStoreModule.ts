import Vue from 'vue'
import { Module } from 'vuex'
import moment from 'moment'
import EventBus, { LANGUAGE_CHANGED, TIMER_EXPIRED } from '../events/EventBus'

export class GameContext {
  targetTime: number = 1
  elapsedTime: number = 0
  isTimerRunning: boolean = false
  isTimerExpired: boolean = false
  language: string = 'default'
}

const GameStoreModule: Module<any, any> = {
  namespaced: true,

  state: {
  },
  mutations: {
    registerGame (state: any, payload: any) {
      // state[payload.gameId] = new GameContext()
      Vue.set(state, payload.gameId, new GameContext())
    },
    timeElapses (state: any, payload: any) {
      Vue.set(state[payload.gameId], 'elapsedTime', state[payload.gameId].elapsedTime + 1)
    },
    setTargetTime (state: any, payload: any) {
      Vue.set(state[payload.gameId], 'targetTime', payload.targetTime)
    },
    setElapsedTime (state: any, payload: any) {
      Vue.set(state[payload.gameId], 'elapsedTime', payload.elapsedTime)
    },
    setTimerRunning (state: any, payload: any) {
      Vue.set(state[payload.gameId], 'isTimerRunning', payload.running)
    },
    setTimerExpired (state: any, payload: any) {
      Vue.set(state[payload.gameId], 'isTimerExpired', payload.expired)
    },
    selectLanguage (state: any, payload: any) {
      Vue.set(state[payload.gameId], 'language', payload.language)
    }
  },
  actions: {
    timeElapses ({ commit, state, getters }, payload: any) {
      if (getters.remainingTime(payload.gameId) <= 0 && !state[payload.gameId].isTimerExpired) {
        commit('setTimerExpired', { ...payload, expired: true })
        EventBus.$emit(TIMER_EXPIRED, payload)
      }
      if (getters.remainingTime(payload.gameId) > 0 && state[payload.gameId].isTimerExpired) {
        commit('setTimerExpired', { ...payload, expired: false })
      }
      commit('timeElapses', payload)
    },
    selectLanguage ({ commit, state }, payload: any) {
      commit('selectLanguage', payload)
      EventBus.$emit(LANGUAGE_CHANGED, payload)
    }
  },
  getters: {
    targetTime (state: any) {
      return gameId => moment().startOf('day').second(state[gameId] ? state[gameId].targetTime : 0)
    },
    elapsedTime (state: any) {
      return gameId => moment().startOf('day').second(state[gameId] ? state[gameId].elapsedTime : 0)
    },
    remainingTime (state: any, getters: any) {
      return gameId => getters.targetTime(gameId).diff(getters.elapsedTime(gameId), 'seconds')
    },
    elapsedTimeFormatted (state: any, getters: any) {
      return gameId => getters.elapsedTime(gameId).format('HH:mm:ss')
    },
    remainingTimeFormatted (state: any, getters: any) {
      return gameId => {
        let remainingSeconds = Math.abs(getters.remainingTime(gameId))
        return moment().startOf('day').second(remainingSeconds).format('HH:mm:ss')
      }
    }
  }
}
export default GameStoreModule
