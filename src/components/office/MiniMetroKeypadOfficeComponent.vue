<template>
  <div>
    <v-row class="px-6">
      <v-col cols="2" v-for="n in 6" v-bind:key="n" >
        <v-btn x-large block depressed>
          {{keyBuffer[n-1]}}
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="center" class="text-left">
      <v-col v-for="(helper, i) in helpers" v-bind:key="i" cols="6" class="ma-0 px-6 py-2 text-left caption">
        {{helper}}
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../../nodemqtt/components/ComponentBase.vue'
import { Watch } from 'vue-property-decorator'

  @Component
export default class MiniMetroKeypadOfficeComponent extends ComponentBase {
    solutionLabel: string[] = ['Drawer', 'Nails', 'Map', 'Mirror', 'Colors', 'Encryption']

    keyBuffer : string[] =['_', '_', '_', '_', '_', '_'];
    helpers: string[] = [ 'Map: F6 B4 F2 H7', 'Mirror: B2 G4 G6 J7', 'Color: B2, B4, F2, G6, J7', 'Encryption: F6, F2, B4, G4' ];

    created () {
      this.$agent.registerInterface('MTMINIMETRO', '/lastKey')
    }

    get lastKey () {
      return this.$store.state.nodes['MTMINIMETRO']['/lastKey']
    }

    @Watch('lastKey')
    onLastKeyChange (val: string, oldVal: string) {
      this.keyBuffer.unshift(val.data)
      if (this.keyBuffer.length > 5) {
        this.keyBuffer.pop()
      }
    }
}
</script>
