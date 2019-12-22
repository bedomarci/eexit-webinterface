<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-card-text>
      <div>{{ node.commonName }}</div>
    </v-card-text>
    <v-card-actions>
      <HeartbeatDialogIcon v-bind:node="node" interface="/hrtbt" ></HeartbeatDialogIcon>
      <ConfigDialogIcon v-bind:node="node" v-bind:interface="['/cfg', '/cfgecho']" ></ConfigDialogIcon>
      <LogDialogIcon v-bind:node="node" interface="/log"></LogDialogIcon>
      <StateControlIcon v-bind:node="node" interface="/control"></StateControlIcon>
    </v-card-actions>
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

}
</script>
