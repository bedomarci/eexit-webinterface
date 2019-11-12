<template>
  <div>
  <v-fade-transition>
      <v-icon :color="heartColor" v-show="thisNode.online">mdi-cards-heart</v-icon>
  </v-fade-transition>
    <v-icon color="blue-grey darken-2" v-show="thisNode.online === false">mdi-heart-broken</v-icon>
    <v-icon color="blue-grey lighten-3" v-show="thisNode.online === undefined">mdi-cards-heart</v-icon>
  </div>
</template>
<script lang='ts'>
import Component from 'vue-class-component'
import NodeInterfaceBase from '@/components/NodeInterfaceBase.vue'
import { mapState } from 'vuex'

@Component({
  props: {
  },
  components: {

  },
  computed: {
    ...mapState('nodes', ['online'])
  }
})
export default class HeartbeatInterface extends NodeInterfaceBase {
  heartColor = 'red lighten-3'
  heartTimeOut: any

  created () {
  }

  onStateChange (newState, oldState) {
    this.heartColor = 'red lighten-2'
    this.heartTimeOut = setTimeout(function () {
      this.heartColor = 'red lighten-3'
    }.bind(this), 500)
  }
}

</script>
