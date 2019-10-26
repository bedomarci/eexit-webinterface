// export default {
//   namespaced: true,
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {}
// }

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class NodeStoreModule extends VuexModule {
  nodes = [];

  get interface () {
    return topic => nodes[topic]
  }

  @Mutation
  message (payload: object) {
    this.nodes[payload.topic] = payload.message
  }

  @Action({ commit: 'message' })
  messege (payload: object) {
    return object
  }
}
