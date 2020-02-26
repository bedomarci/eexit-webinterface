<template>
  <div>
    <div class="fill-height d-flex flex-column justify-start align-stretch">
      <v-row dense>
        <v-col class="col-12 justify-start">
          <v-card class="ma-4">
            <MissionForecaster v-bind:config="config"></MissionForecaster>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex">
                <v-col class="col-6" v-for="controller in controllers" v-bind:key="controller.name">
                  <v-card class="ma-4">
                    <v-card-title>{{controller.name}}</v-card-title>
                    <component v-bind:is="controller.name" v-bind:config="config"></component>
                  </v-card>
                </v-col>
<!--        <v-col v-for="n in 60" v-bind:key="n" class="col-6 pa-5 yellow">-->
<!--          <p class="red">paragraph {{n}}</p>-->
<!--        </v-col>-->
      </v-row>

    </div>
    <v-footer      absolute      dense    >
      <NodeEssentialsContainer class="flex-row" v-for="node in nodes" v-bind:key="node.id"
                               v-bind:node="node"></NodeEssentialsContainer>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../components/ComponentBase.vue'
import MissionForecaster from '../components/MissionForecaster.vue'
import NodeEssentialsContainer from '../components/node/NodeEssentialsContainer.vue'
import SolutionMapOfficeComponent from '../../components/office/SolutionMapOfficeComponent.vue'
import ConsoleOfficeComponent from '../../components/office/ConsoleOfficeComponent.vue'
import MiniMetroKeypadOfficeComponent from '../../components/office/MiniMetroKeypadOfficeComponent.vue'
import NailOfficeComponent from '../../components/office/NailOfficeComponent.vue'
import DrawerOfficeComponent from '../../components/office/DrawerOfficeComponent.vue'
import { Prop } from 'vue-property-decorator'
import GameConfig from '../interfaces/GameConfigInterface'
import GameControllerBase from '@/nodemqtt/components/GameControllerBase.vue'

  @Component({
    components: {
      MissionForecaster,
      NodeEssentialsContainer
    }
  })
export default class MissionContainer extends ComponentBase {
    // @Prop({ required: true }) private id : string
    @Prop({ required: true }) private config: GameConfig

    created () {
      this.controllers.forEach(this.registerControllers)
    }
    registerControllers (component: GameControllerBase) {
      console.log(component.name)
      this.$options.components[component.name] = component
    }

    get mission () {
      let missionId = this.$route.params.id
      return this.config.missions.find(mission => mission.id === missionId)
    }

    get nodes () {
      return this.config.nodes.filter(function (node) {
        return this.mission.nodes.includes(node.id)
      }.bind(this))
    }

    get controllers () {
      return this.mission.controllers
    }
}
</script>
