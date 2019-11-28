<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class ComponentBase extends Vue {
  @Prop({ required: true }) private config: Object;
  get context () {
    return this.$store.state.game[this.config.gameId]
  }
}
</script>
