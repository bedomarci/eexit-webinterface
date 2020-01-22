<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="pa-1  col-2  overline">
        Global achievement
      </v-col>
      <v-col align-self="center">
        <v-progress-linear
          background-opacity=".1"
          :buffer-value="globalRecommandedAchievement"
          height="10"
          :value="globalCurrentAchievement"
          color="light-blue"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="pa-1 col-2 overline">
        Mission achievement
      </v-col>
      <v-col align-self="center">
        <v-progress-linear
          background-opacity=".4"
          :buffer-value="missionRecommandedAchievement"
          height="10"
          :value="missionCurrentAchievement"
          color="light-blue"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from './ComponentBase.vue'
import { Prop, Watch } from 'vue-property-decorator'
import NodeConfig from '../interfaces/NodeConfigInterface'

@Component
export default class MissionForecaster extends ComponentBase {
    globalCurrentAchievement: number = 0
    globalRecommandedAchievement: number = 50
    missionCurrentAchievement: number = 10
    missionRecommandedAchievement: number = 11

    @Watch('elapsedTime', { deep: true })
    private onTimeChanged (newTime: any, oldTime: any) {
      this.globalRecommandedAchievement = newTime / this.targetTime * 100
    }

    get elapsedTime () {
      return this.$store.state.game[this.config.gameId].elapsedTime
    }

    get targetTime () {
      return this.config.targetTime
    }
}
</script>

<style scoped>

</style>
