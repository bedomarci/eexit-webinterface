import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import EventBus, { SAVING_PAYLOAD, PAYLOAD_SAVED } from '../events/EventBus'

const NodeStoreModule: Module<any, any> = {
  namespaced: true,
  state: {
    _baseTopics: [],
    _subscriptions: [],
    _baseTopicPrefix: ''
  },
  mutations: {
    setBaseTopicPrefix (state: any, prefix: string) {
      state._baseTopicPrefix = prefix
    },
    addBaseTopic (state: any, baseTopic: string) {
      if (!state._baseTopics.includes(baseTopic)) {
        state._baseTopics.push(baseTopic)
        Vue.set(state, baseTopic, {})
      }
    },
    saveNodeState (state: any, payload: any) {
      // let subTopic = payload.topic.substr(state._baseTopicPrefix.length + payload.baseTopic.length)
      Vue.set(state[payload.baseTopic], payload.subTopic, payload.message)
    },
    addSubscription (state: any, payload: string) {
      if (state._subscriptions.indexOf(payload) === -1) {
        state._subscriptions.push(payload)
      }
    }
  },
  getters: {
    interface (state: any) {
      return (node: string, nodeInterface: string) => state[node][nodeInterface]
    },
    node (state: any) {
      return (node: string) => state[node]
    }
  },
  actions: {
    storeMessage ({ commit, state }, payload: any) {
      let currentBaseTopic = state._baseTopics.find(baseTopic => payload.topic.startsWith(state._baseTopicPrefix + baseTopic), this)
      if (currentBaseTopic !== undefined) {
        if (typeof payload.message === 'string') {
          try {
            payload.message = JSON.parse(payload.message)
          } catch (e) {}
        }
        let subTopic = payload.topic.substr(state._baseTopicPrefix.length + currentBaseTopic.length)
        let payloadToSave = { baseTopic: currentBaseTopic, subTopic: subTopic, message: payload.message }
        EventBus.$emit(SAVING_PAYLOAD, payloadToSave)
        commit('saveNodeState', payloadToSave)
        EventBus.$emit(PAYLOAD_SAVED, payloadToSave)
      }
    },
    accumlateMessage ({ commit, state }, payload: any) {
      let container = state[payload.baseTopic][payload.subTopic] || []
      container.push(payload.message)
      if (payload.limit) {
        let overflow = container.length - payload.limit
        if (overflow > 0) {
          container = container.splice(overflow, container.length)
        }
      }
      payload.message = container
      commit('saveNodeState', payload)
    }
  }
}
export default NodeStoreModule
