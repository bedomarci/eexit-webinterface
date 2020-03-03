<template>
  <div>
    <v-row align="center" class="px-3">
      <v-col cols="3">
        Disks
      </v-col>
      <v-col cols="9">
        <v-row justify="space-around">
          <v-col cols="3" v-for="n in 4" v-bind:key="n">
            <v-btn x-large block depressed :disabled="!diskState(n-1)"
                   :color="(n>2)? 'purple lighten-2' : 'red lighten-2'">
              <v-icon x-large v-if="diskState(n-1)">mdi-check</v-icon>
              <v-icon x-large v-if="!diskState(n-1)">mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="3">
        Slot machine
      </v-col>
      <v-col cols="9">
        <v-row justify="space-around">

          <v-col cols="3" v-for="n in 3" v-bind:key="n">
            <v-btn x-large block depressed :disabled="!slotState(n-1)">
              <v-icon x-large v-if="slotState(n-1)">mdi-check</v-icon>
              <v-icon x-large v-if="!slotState(n-1)">mdi-close</v-icon>
            </v-btn>
          </v-col>

        </v-row>
      </v-col>

      <v-col cols="3">
        Lottery
      </v-col>
      <v-col cols="9">
        <v-row justify="space-around">
          <v-col cols="4">
            <v-btn x-large block depressed :disabled="!lotteryState(DISK_MOTOR)">
              <v-icon x-large v-if="lotteryState(DISK_MOTOR)">mdi-cached</v-icon>
              <v-icon x-large v-if="!lotteryState(DISK_MOTOR)">mdi-pause-circle-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn x-large block depressed :disabled="!lotteryState(KEY_MAGNET)">
              <v-icon x-large v-if="lotteryState(KEY_MAGNET)">mdi-lock</v-icon>
              <v-icon x-large v-if="!lotteryState(KEY_MAGNET)">mdi-lock-open</v-icon>
            </v-btn>
          </v-col>

        </v-row>
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
        disk: state => state.MTDISKS['/PORT0'],
        slot: state => state.MTSLOT['/porta'],
        lottery: state => state.MTLOTTERY['/PORT0']
      })
    }
  })
export default class KeyMachineEngineHouseComponent extends GameControllerBase {
    const DISK_MOTOR = 4
    const KEY_MAGNET = 6

    labelDisk: string[] = ['LEVEL 1/A', 'LEVEL 1/B', 'LEVEL 2/A', 'LEVEL 2/B']

    created () {
      this.$agent.registerInterface('MTDISKS', '/PORT1')
      this.$agent.registerInterface('MTSLOT', '/porta')
      this.$agent.registerInterface('MTLOTTERY', '/PORT1')
    }

    diskState (index) {
      if (!this.disk) return false
      return this.disk['array'][index]
    }

    slotState (index) {
      if (!this.slot) return false
      return this.slot['array'][index]
    }

    lotteryState (index) {
      if (!this.lottery) return false
      return this.lottery['array'][index]
    }
}
</script>
