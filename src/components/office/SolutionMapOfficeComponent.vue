<template>
<div>
  <v-row v-if="solution">
    <v-col cols="2" v-for="n in 6" v-bind:key="n" class="ma-0 pa-0 text-center" >
      <v-btn text icon large>
        <v-icon x-large v-if="!solution['array'][n-1]">mdi-lightbulb</v-icon>
        <v-icon x-large v-if="solution['array'][n-1]">mdi-lightbulb-outline</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  <v-row v-if="!solution">
    <v-col cols="2" v-for="n in 6" v-bind:key="n" class="ma-0 pa-0 text-center" >
      <v-btn text icon large>
        <v-icon x-large>mdi-checkbox-blank-circle-outline</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  <v-row align="center">
  <v-col cols="2" v-for="n in 6" v-bind:key="n" class="ma-0 py-0 px-2 text-center caption">
    {{solutionLabel[n-1]}}
  </v-col>
  </v-row>
</div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import GameControllerBase from '../../nodemqtt/components/GameControllerBase.vue'

@Component
export default class SolutionMapOfficeComponent extends GameControllerBase {
  solutionLabel: string[] = ['Drawer', 'Nails', 'Map', 'Mirror', 'Colors', 'Encryption']

  created () {
    this.$agent.registerInterface('MTEDISON', '/edison')
  }

  get solution () {
    return this.$store.state.nodes['MTEDISON']['/edison']
    // return [true, false, true, true, false, false]
    // return false
  }
}
</script>
