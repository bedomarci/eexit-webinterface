<template>
    <v-row>
      <v-col class="">
        <v-btn text icon>
          <v-icon x-large>mdi-lightbulb-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../../nodemqtt/components/ComponentBase.vue'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters({ console: 'nodes/MTCONSOLE/' })
  }
})
export default class ConsoleOfficeComponent extends ComponentBase {
CAPSULE_GLARE = 0
CAPSULE_GLOW = 1
CAPSULE_SENSOR = 2
CONSOLE_DOOR_SENSOR = 3

SMOKE_PWR = 4
SMOKE_EN = 5
SIDE_DOOR_LOCK = 6
OFFICE_DOOR_LOCK = 7

created () {
  this.$agent.registerInterface('MTCONSOLE', '/porta')
}

get officeDoor () {
  return this.console.porta[this.OFFICE_DOOR_LOCK]
}

get trapDoor () {
  return this.console.porta[this.SIDE_DOOR_LOCK]
}

get capsuleGlare () {
  return this.console.porta[this.CAPSULE_GLARE]
}

get capsuleGlow () {
  return this.console.porta[this.CAPSULE_GLOW]
}

get capsuleSensor () {
  return this.console.porta[this.CAPSULE_SENSOR]
}

get capsuleDoorSensor () {
  return this.console.porta[this.CONSOLE_DOOR_SENSOR]
}
}
</script>
