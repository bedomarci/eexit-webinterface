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

    <v-row class="scroll-y">
      <NodeEssentialsContainer v-for="node in config.nodes" v-bind:key="node.id" v-bind:node="node"></NodeEssentialsContainer>
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
import NodeEssentialsContainer from '../components/node/NodeEssentialsContainer.vue'

  @Component({
    components: { MissionForecaster, NodeEssentialsContainer },
    props: {
      config: Object
    }
  })
export default class MissionContainer extends ComponentBase {

}
</script>
