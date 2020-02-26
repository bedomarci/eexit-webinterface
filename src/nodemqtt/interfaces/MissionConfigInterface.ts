import GameControllerBase from '@/nodemqtt/components/GameControllerBase.vue'

export default interface MissionConfig {
  id:string,
  nodes: string[],
  controllers: GameControllerBase[],
  targetTime: number,
}
