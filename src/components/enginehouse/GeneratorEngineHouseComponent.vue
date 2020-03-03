<template>
  <div>

  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import GameControllerBase from '../../nodemqtt/components/GameControllerBase.vue'
import { mapState } from 'vuex'

  @Component({
    computed: {
      ...mapState('nodes', {
        generator: state => state.MTCONSOLE['/porta']
      })
    }
  })
export default class GeneratorEngineHouseComponent extends GameControllerBase {
  created () {
    this.$agent.registerInterface('MTGENERATOR', '/PORT1')
  }
}
</script>
