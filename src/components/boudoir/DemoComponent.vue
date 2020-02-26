<template>
  <div>

  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../../nodemqtt/components/ComponentBase.vue'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState('nodes', {
      mtconsole: state => state.MTCONSOLE['/porta']
    })
  }
})
export default class XX extends ComponentBase {

}
</script>
