<template>
  <div>
    <v-row justify="center">
      <v-col cols="2" v-for="n in 5" v-bind:key="n" >
        <v-btn x-large block depressed :disabled="!isInserted(n-1)">
          <v-icon x-large v-if="isInserted(n-1)">mdi-power-plug</v-icon>
          <v-icon x-large v-if="!isInserted(n-1)">mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import GameControllerBase from '../../nodemqtt/components/GameControllerBase.vue'
import { mapState } from 'vuex'

  @Component({
    computed: {
      ...mapState('nodes', {
        socket: state => state.MTTOTEM['/solution']
      })
    }
  })
export default class SocketConsoleEngineHouseComponent extends GameControllerBase {
  created () {
    this.$agent.registerInterface('MTTOTEM', '/solution')
  }

  isInserted (index) {
    if (!this.socket) return false
    return this.socket['array'][index]
  }
}
</script>
