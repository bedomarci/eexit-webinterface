<template>
  <div>
    <v-row justify="center">
      <v-col cols="2" v-for="n in 4" v-bind:key="n" >
        <v-btn x-large block depressed :disabled="!isInserted(n-1)">
          <v-icon x-large v-if="isInserted(n-1)">mdi-check</v-icon>
          <v-icon x-large v-if="!isInserted(n-1)">mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import GameControllerBase from '../../nodemqtt/components/GameControllerBase.vue'

  @Component
export default class DrawerOfficeComponent extends GameControllerBase {
  created () {
    this.$agent.registerInterface('MTDRAWER', '/PORT1')
  }

  get nails () {
    return this.$store.state.nodes['MTDRAWER']['/PORT1']
  }

  isInserted (index) {
    if (!this.nails) return false
    return this.nails['array'][index]
  }
}
</script>
