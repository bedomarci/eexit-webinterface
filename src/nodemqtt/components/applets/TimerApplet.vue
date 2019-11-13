<template>
  <v-btn-toggle dense >
    <v-btn @click="toggleTimer" small>
      <v-icon v-if="!context.isTimerRunning">mdi-play</v-icon>
      <v-icon v-if="context.isTimerRunning">mdi-stop</v-icon>
    </v-btn>

    <v-btn :color="context.isTimerExpired ? 'red darken-4' : ''" small>
      {{remainingTimeFormatted(config.gameId)}}
    </v-btn>

  </v-btn-toggle>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import AppletBase from '@/nodemqtt/components/ComponentBase.vue'
import { mapGetters, mapState } from 'vuex'
import EventBus, { START_TIMER, STOP_TIMER } from '@/nodemqtt/events/EventBus'

  @Component({
    computed: {
      ...mapState('game', {
      // context: state => state[this.config.gameId]
      }),
      ...mapGetters('game', ['remainingTimeFormatted', 'elapsedTimeFormatted'])
    },
    methods: {
    // ...mapMutations('game', ['doSomething'])
    }
  })
export default class TimerApplet extends AppletBase {
  toggleTimer () {
    this.context.isTimerRunning ? this.stopTimer() : this.startTimer()
  }

  startTimer () {
    EventBus.$emit(START_TIMER, { gameId: this.config.gameId })
  }
  stopTimer () {
    EventBus.$emit(STOP_TIMER, { gameId: this.config.gameId })
  }
}
</script>

<style scoped>

</style>
