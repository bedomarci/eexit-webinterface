<template>
  <v-container fluid class="d-flex flex-row flex-wrap align-start">
    <v-row dense>
      <v-card class="col-12">
        <MissionForecaster v-bind:config="config"></MissionForecaster>
      </v-card>

      <v-card class="col-6">
        <SolutionMapOfficeComponent v-bind:config="config"></SolutionMapOfficeComponent>
      </v-card>

      <v-card class="col-6">
        <ConsoleOfficeComponent v-bind:config="config"></ConsoleOfficeComponent>
      </v-card>

    </v-row>

    <v-footer absolute>
      <v-row class="scroll-y">
        <NodeEssentialsContainer v-for="node in missionNodes" v-bind:key="node.id"
                                 v-bind:node="node"></NodeEssentialsContainer>
      </v-row>
    </v-footer>

  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../components/ComponentBase.vue'
import MissionForecaster from '../components/MissionForecaster.vue'
import NodeEssentialsContainer from '../components/node/NodeEssentialsContainer.vue'
import SolutionMapOfficeComponent from '../../components/office/SolutionMapOfficeComponent.vue'
import ConsoleOfficeComponent from '../../components/office/ConsoleOfficeComponent.vue'
import { Prop } from 'vue-property-decorator'
import GameConfig from '../interfaces/GameConfigInterface'

  @Component({
    components: { MissionForecaster, NodeEssentialsContainer, SolutionMapOfficeComponent, ConsoleOfficeComponent }
  })
export default class MissionContainer extends ComponentBase {
    // @Prop({ required: true }) private id : string
    @Prop({ required: true }) private config: GameConfig

    get missionNodes () {
      let missionId = this.$route.params.id
      let mission = this.config.missions.find(mission => mission.id === missionId)
      return this.config.nodes.filter(function (node) {
        return mission.nodes.includes(node.id)
      })
    }
}
</script>
