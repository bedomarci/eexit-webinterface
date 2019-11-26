<template>
    <HeartbeatDialog v-bind:node="node" v-bind:interface="interface">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" x-small>
          <v-fade-transition>
            <v-icon :color="heartColor" v-show="thisNode.online">mdi-cards-heart</v-icon>
          </v-fade-transition>
          <v-icon color="blue-grey darken-2" v-show="thisNode.online === false">mdi-heart-broken</v-icon>
          <v-icon color="blue-grey lighten-3" v-show="thisNode.online === undefined">mdi-cards-heart</v-icon>
        </v-btn>
      </template>
    </HeartbeatDialog>
</template>
<script lang='ts'>
import Component from 'vue-class-component'
import NodeInterfaceBase from '@/nodemqtt/components/interfaces/NodeInterfaceBase.vue'
import HeartbeatDialog from '@/nodemqtt/components/interfaces/HeartbeatDialog.vue'
import { mapState } from 'vuex'

  @Component({
    props: {},
    components: {
      HeartbeatDialog
    },
    computed: {
      ...mapState('nodes', ['online'])
    }
  })
export default class HeartbeatIcon extends NodeInterfaceBase {
    heartColor = 'red lighten-3'
    heartTimeOut: any
    // dialog: boolean = false

    created () {
    }

    onStateChange (newState: any, oldState: any) {
      this.heartColor = 'red lighten-2'
      this.heartTimeOut = setTimeout(function () {
        this.heartColor = 'red lighten-3'
      }.bind(this), 500)
    }
}

</script>
