<template>
  <v-btn-toggle dense >
    <v-btn @click="initAll" small>INIT</v-btn>
    <v-btn @click="maintainAll" small>MAINTAIN</v-btn>
    <v-btn @click="disableAll" small>DISABLE</v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../../components/ComponentBase.vue'
import { mapGetters, mapState } from 'vuex'
import EventBus, { DISABLE_GAME, INITIALIZE_GAME, MAINTAIN_GAME } from '../../events/EventBus'

  @Component
export default class TimerApplet extends ComponentBase {
  initAll () {
    this.config.nodes.forEach(node => this.$agent.publish(node.baseTopic + '/control', { data: node.initState }))
    EventBus.$emit(INITIALIZE_GAME)
  }
  maintainAll () {
    this.config.nodes.forEach(node => this.$agent.publish(node.baseTopic + '/control', { data: 'MAINTAIN' }))
    EventBus.$emit(MAINTAIN_GAME)
  }

  disableAll () {
    this.config.nodes.forEach(node => this.$agent.publish(node.baseTopic + '/control', { data: 'DISABLE' }))
    EventBus.$emit(DISABLE_GAME)
  }
}
</script>
