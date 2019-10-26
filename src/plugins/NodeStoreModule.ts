import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import Vue from 'vue'

@Module({
  namespaced: true,
  name: 'nodes'
})
export default class NodeStoreModule extends VuexModule {
  private _baseTopics: string[] = [];
  private _baseTopicPrefix: string

  get interface () {
    return topic => nodes[topic]
  }

  @Mutation
  saveMessage (payload: any) {
    // let currentBaseTopic: string = this._baseTopics.find(baseTopic => payload.topic.startsWith(this._baseTopicPrefix + baseTopic), this)
    // if (currentBaseTopic !== undefined) {
    //   try {
    //     payload.message = JSON.parse(payload.message)
    //   } catch (e) {
    //   }
    //
    //   let subTopic = payload.topic.substr(this._baseTopicPrefix.length + currentBaseTopic.length)
    //   Vue.set(this[currentBaseTopic], subTopic, payload.message)
    // }
    let subTopic = payload.topic.substr(this._baseTopicPrefix.length + payload.baseTopic.length)
    Vue.set(this[payload.baseTopic], payload.subTopic, payload.message)
  }

  @Mutation
  addBaseTopic (baseTopic: string) {
    if (!this._baseTopics.includes(baseTopic)) {
      this._baseTopics.push(baseTopic)
      Vue.set(this, baseTopic, {})
    }
  }

  @Action({ rawError: true })
  processMessage (payload: any) {
    let currentBaseTopic: string = this._baseTopics.find(baseTopic => payload.topic.startsWith(this._baseTopicPrefix + baseTopic), this)
    if (currentBaseTopic !== undefined) {
      try {
        payload.message = JSON.parse(payload.message)
      } catch (e) {
      }

      let subTopic = payload.topic.substr(this._baseTopicPrefix.length + currentBaseTopic.length)
      console.log(payload.message)
      this.context.commit('saveMessage', { baseTopic: currentBaseTopic, subTopic: subTopic, message: payload.message })
    }
  }

  @Mutation
  setBaseTopicPrefix (prefix: string) {
    this._baseTopicPrefix = prefix
  }
}
