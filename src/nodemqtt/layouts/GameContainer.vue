<template>
  <v-app id="game-container">
    <GameContainerHeader v-bind:config="config"></GameContainerHeader>
    <GameContainerSidebar v-bind:config="config"></GameContainerSidebar>
    <v-content>
      <v-container>
              <MissionContainer v-bind:config="config">

              </MissionContainer>
      </v-container>
    </v-content>
    <GameContainerFooter v-bind:config="config"></GameContainerFooter>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import GameContainerHeader from './GameContainerHeader.vue'
import GameContainerSidebar from './GameContainerSidebar.vue'
import GameContainerFooter from './GameContainerFooter.vue'
import MissionContainer from './MissionContainer.vue'
import ComponentBase from '../components/ComponentBase.vue'

@Component({
  components: {
    MissionContainer,
    GameContainerHeader,
    GameContainerSidebar,
    GameContainerFooter
  }
})
export default class GameContainer extends ComponentBase {
  drawer: boolean = false
  created () {

  }
}

</script>
