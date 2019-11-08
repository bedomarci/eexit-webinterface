import Vue from 'vue'
import { Module } from 'vuex'

const NodeStoreModule: Module<any, any> = {
  namespaced: true,
  state: {
    _baseTopics: [],
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
    saveMessage (state: any, payload: any) {
      // let subTopic = payload.topic.substr(state._baseTopicPrefix.length + payload.baseTopic.length)
      Vue.set(state[payload.baseTopic], payload.subTopic, payload.message)
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
    processMessage ({ commit, state }, payload: any) {
      let currentBaseTopic = state._baseTopics.find(baseTopic => payload.topic.startsWith(state._baseTopicPrefix + baseTopic), this)
      if (currentBaseTopic !== undefined) {
        try {
          payload.message = JSON.parse(payload.message)
        } catch (e) {
        }

        let subTopic = payload.topic.substr(state._baseTopicPrefix.length + currentBaseTopic.length)
        console.log(payload.topic + '-' + payload.message.toString())
        commit('saveMessage', { baseTopic: currentBaseTopic, subTopic: subTopic, message: payload.message })
      }
    }
  }
}
export default NodeStoreModule
