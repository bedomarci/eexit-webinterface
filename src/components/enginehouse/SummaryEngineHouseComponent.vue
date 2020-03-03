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
        mtconsole: state => state.MTCONSOLE['/porta']
      })
    }
  })
export default class SummaryEngineHouseComponent extends GameControllerBase {

}
</script>
