<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-responsive min-width="120px" height="65px"
    >
        <v-expand-transition>
        <div
          v-if="!overlay"
          @mouseover="overlay = true"
        class="ma-2 font-weight-bold caption"
        >
        {{ node.commonName }}
        </div>
      </v-expand-transition>
      <v-expand-transition>
        <div
          v-if="overlay"
        @mouseleave="overlay = false"
        >
        <HeartbeatDialogIcon class="d-inline" v-bind:node="node" interface="/hrtbt"></HeartbeatDialogIcon>
        <ConfigDialogIcon class="d-inline" v-bind:node="node"
                          v-bind:interface="['/cfg', '/cfgecho']"></ConfigDialogIcon>
        <LogDialogIcon class="d-inline" v-bind:node="node" interface="/log"></LogDialogIcon>
        <StateControlIcon class="d-inline" v-bind:node="node" interface="/control"></StateControlIcon>
        </div>
      </v-expand-transition>
    </v-responsive>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import HeartbeatDialogIcon from '../interface/HeartbeatDialogIcon.vue'
import ConfigDialogIcon from '../interface/ConfigDialogIcon.vue'
import LogDialogIcon from '../interface/LogDialogIcon.vue'
import StateControlIcon from '../interface/StateControlIcon.vue'
import NodeBase from './NodeBase.vue'

  @Component({
    components: { LogDialogIcon, ConfigDialogIcon, HeartbeatDialogIcon, StateControlIcon },
    props: {
      config: Object
    }
  })
export default class NodeEssentialsContainer extends NodeBase {
    overlay: boolean = false;
}
</script>
