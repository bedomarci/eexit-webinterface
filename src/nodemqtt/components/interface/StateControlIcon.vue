<template>
  <div>
    <v-btn @click="sheet = true" icon x-small>
      <v-icon>mdi-state-machine</v-icon>
    </v-btn>
    <v-bottom-sheet inset v-model="sheet" class="text-center">
      <v-sheet class="text-center">
        <v-toolbar>
          <v-toolbar-title>{{node.commonName}} States</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="sheet = false">close</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="py-6">
          <v-btn
            v-for="state in this.node.states"
            v-bind:key="state"
            v-bind:color="isInitState(state) ? 'primary' : ''"
            @click="publish(state)"
            class="ma-2 col-lg-3 col-sm-2" large dark>
            {{state}}
          </v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import InterfaceBase from './NodeInterfaceBase.vue'
import { Watch } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

  @Component({
    components: {},
    computed: {
      ...mapGetters('nodes', ['getInterface', 'getNode'])
    }
  })
export default class StateControlIcon extends InterfaceBase {
    sheet: boolean = false

    isInitState (state: string) {
      return state === this.node.initState
    }
}
</script>
