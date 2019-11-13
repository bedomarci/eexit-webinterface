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

  @Component({
    props: {
      config: Object
    }
  })
export default class GameContainer extends ComponentBase {
    globalCurrentAchievement: number = 10
    globalRecommandedAchievement: number = 20
    missionCurrentAchievement: number = 50
    missionRecommandedAchievement: number = 70
}
</script>

<style scoped>

</style>
