<template>
  <v-card
    class="mx-1"
    max-width="344"
  >
    <v-responsive min-width="120px" height="65px"
    >
        <div class="mx-2 mt-1 font-weight-bold caption">
        {{ node.commonName }}
        </div>
        <div class="mx-2">
        <HeartbeatDialogIcon class="d-inline" v-bind:node="node" interface="/hrtbt"></HeartbeatDialogIcon>
        <ConfigDialogIcon class="d-inline" v-bind:node="node"
                          v-bind:interface="['/cfg', '/cfgecho']"></ConfigDialogIcon>
        <StateControlIcon class="d-inline" v-bind:node="node" interface="/control"></StateControlIcon>
        <LogDialogIcon class="d-inline" v-bind:node="node" interface="/log"></LogDialogIcon>
        </div>
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
