<script lang="ts">
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import GameConfig from '../interfaces/GameConfigInterface'
import ComponentBase from '@/nodemqtt/components/ComponentBase.vue'

export default abstract class GameControllerBase extends ComponentBase {
  abstract name:string
}
</script>
