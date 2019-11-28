<template>
  <v-container fluid>
    <v-row dense
           align="center"
           justify="center"
    >
      <v-col class="col-12">
        <v-card>
          <MissionForecaster></MissionForecaster>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <HeartbeatDialogIcon v-bind:node="config.nodes[0]" interface="/hrtbt" ></HeartbeatDialogIcon>
      <ConfigDialogIcon v-bind:node="config.nodes[0]" v-bind:interface="['/cfg', '/cfgecho']" ></ConfigDialogIcon>
      <LogDialogIcon v-bind:node="config.nodes[0]" interface="/log"></LogDialogIcon>
      <StateControlIcon v-bind:node="config.nodes[0]" interface="/log"></StateControlIcon>
    </v-row>

    <v-footer
      absolute
    >
      <v-col class="col-12">
        <v-card>
          <MissionForecaster></MissionForecaster>
        </v-card>
      </v-col>
    </v-footer>

  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../components/ComponentBase.vue'
import MissionForecaster from '../components/MissionForecaster.vue'
import HeartbeatDialogIcon from '../components/interfaces/HeartbeatDialogIcon.vue'
import ConfigDialogIcon from '../components/interfaces/ConfigDialogIcon.vue'
import LogDialogIcon from '../components/interfaces/LogDialogIcon.vue'
import StateControlIcon from '../components/interfaces/StateControlIcon.vue'

  @Component({
    components: { LogDialogIcon, ConfigDialogIcon, MissionForecaster, HeartbeatDialogIcon, StateControlIcon },
    props: {
      config: Object
    }
  })
export default class MissionContainer extends ComponentBase {

}
</script>

<style scoped>

</style>
