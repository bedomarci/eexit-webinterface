<template>
  <div>
    <v-row justify="center">
      <v-col cols="2" v-for="n in 5" v-bind:key="n" >
        <v-btn x-large block depressed :color="colors[n-1]" :disabled="!isInserted(n-1)">
          <v-icon x-large v-if="isInserted(n-1)">mdi-nail</v-icon>
          <v-icon x-large v-if="!isInserted(n-1)">mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../../nodemqtt/components/ComponentBase.vue'

  @Component
export default class NailOfficeComponent extends ComponentBase {
  colors: string[] = ['red', 'blue', 'orange', 'green', 'white'];
  created () {
    this.$agent.registerInterface('MTNAILS', '/snsr')
  }

  get nails () {
    return this.$store.state.nodes['MTNAILS']['/snsr']
  }

  isInserted (index) {
    if (!this.nails) return false
    return this.nails['array'][index]
  }
}
</script>
