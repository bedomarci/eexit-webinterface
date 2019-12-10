<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import GameConfig from '../interfaces/GameConfigInterface'

@Component
export default class ComponentBase extends Vue {
  @Prop({ required: true }) private config: GameConfig;
  get context () {
    return this.$store.state.game[this.config.gameId]
  }
}
</script>
