<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    config: Object
  }
})
export default class ComponentBase extends Vue {
  get context () {
    return this.$store.state.game[this.config.gameId]
  }
}
</script>
