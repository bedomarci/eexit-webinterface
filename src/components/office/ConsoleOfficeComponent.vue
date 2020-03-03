<template>
  <div>
  <v-row v-if="mtconsole">
      <v-col cols="2" v-for="n in 6" v-bind:key="n" class="ma-0 pa-0 text-center" >
        <v-btn text icon large>
          <v-icon x-large v-if="!mtconsole['array'][indexes[n-1]]">mdi-{{iconsOn[n-1]}}</v-icon>
          <v-icon x-large v-if="mtconsole['array'][indexes[n-1]]">mdi-{{iconsOff[n-1]}}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!mtconsole">
      <v-col cols="2" v-for="n in 6" v-bind:key="n" class="ma-0 pa-0 text-center" >
        <v-btn text icon large>
          <v-icon x-large>mdi-checkbox-blank-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="2" v-for="n in 6" v-bind:key="n" class="ma-0 py-0 px-2 text-center caption">
        {{labels[n-1]}}
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import GameControllerBase from '../../nodemqtt/components/GameControllerBase.vue'
import { mapState } from 'vuex'

  @Component({
    computed: {
      ...mapState('nodes', {
        mtconsole: state => state.MTCONSOLE['/porta']
      })
    }
  })
export default class ConsoleOfficeComponent extends GameControllerBase {
    CAPSULE_GLARE = 0;
    CAPSULE_GLOW = 1;
    CAPSULE_SENSOR = 2;
    CONSOLE_DOOR_SENSOR = 3;

    SMOKE_PWR = 4;
    SMOKE_EN = 5;
    SIDE_DOOR_LOCK = 6;
    OFFICE_DOOR_LOCK = 7;

    iconsOn: string[] = ['lightbulb-outline', 'lightbulb-outline', 'battery-outline', 'lock-open', 'door-open', 'door-open'];
    iconsOff: string[] = ['lightbulb', 'lightbulb', 'battery', 'lock', 'door', 'door'];
    labels: string[] = ['Glare', 'Glow', 'Capsule', 'Lid', 'Trap', 'Gate'];
    indexes: number[] = [this.CAPSULE_GLARE, this.CAPSULE_GLOW, this.CAPSULE_SENSOR, this.CONSOLE_DOOR_SENSOR, this.SIDE_DOOR_LOCK, this.OFFICE_DOOR_LOCK]

    created () {
      this.$agent.registerInterface('MTCONSOLE', '/porta')
    }
}
</script>
