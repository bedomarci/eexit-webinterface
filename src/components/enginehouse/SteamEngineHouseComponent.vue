<template>
  <v-row justify="center">
    <v-col cols="2" v-for="n in 4" v-bind:key="n" >
      <v-btn x-large block depressed :disabled="!pipeState(n-1)">
        <v-icon x-large v-if="pipeState(n-1)">mdi-check</v-icon>
        <v-icon x-large v-if="!pipeState(n-1)">mdi-close</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import GameControllerBase from '../../nodemqtt/components/GameControllerBase.vue'
import { mapState } from 'vuex'

  @Component({
    computed: {
      ...mapState('nodes', {
        pipe: state => state.MTPIPE['/PORT0']
      })
    }
  })
export default class SteamEngineHouseComponent extends GameControllerBase {
  created () {
    this.$agent.registerInterface('MTPIPE', '/PORT0')
  }

  pipeState (index) {
    if (!this.pipe) return false
    return this.pipe['array'][index]
  }
}
</script>
