<template>
  <div class="text-center">
    <v-btn @click="sheet = true" icon x-small >
      <v-icon>mdi-state-machine</v-icon>
    </v-btn>
    <v-bottom-sheet inset v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >close</v-btn>
        <div class="py-3">This is a bottom sheet using the controlled by v-model instead of activator</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import NodeInterfaceBase from './NodeInterfaceBase.vue'
import { Watch } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  components: {},
  computed: {
    ...mapGetters('nodes', ['getInterface', 'getNode'])
  }
})
export default class StateControlIcon extends NodeInterfaceBase {
    sheet : boolean = false
}
</script>
